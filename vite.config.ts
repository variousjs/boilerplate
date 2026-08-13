import { defineConfig, type UserConfig } from 'vite'
import path from 'path'
import {
  createReadStream,
  readdirSync,
  statSync,
  readFileSync,
  watch,
} from 'fs'
import type { ServerResponse } from 'http'

// Externals: not bundled, resolved at runtime via import maps / CDN
const EXTERNALS = [
  'react',
  'react-dom/client',
  'react-router-dom',
  '@variousjs/various',
  'vue',
]

const ROOT = process.cwd()

// Scan components: use src/components/<name>/index.{ts,tsx} as entry
function scanComponentEntries(): Record<string, string> {
  const entries: Record<string, string> = {}

  readdirSync(path.resolve(ROOT, './src/components')).forEach((name) => {
    const dir = path.resolve(ROOT, `./src/components/${name}`)
    const candidates = [
      path.join(dir, 'index.tsx'),
      path.join(dir, 'index.ts'),
    ]
    const entry = candidates.find((c) => {
      try {
        return statSync(c).isFile()
      } catch {
        return false
      }
    })
    if (entry) {
      entries[name] = entry
    }
  })

  return entries
}

const MIME_TYPES: Record<string, string> = {
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.map': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
}

// Static asset serving for /dist/* and HTML files.
// Bypasses Vite transform so browsers receive correct Content-Type
// (CSS is parsed as CSS, not JS) and import maps stay intact.
function staticServerPlugin(): Plugin[] {
  return [
    {
      name: 'various-static-server',
      configureServer(server: any) {
        applyMiddleware(server.middlewares, { injectReloadScript: true })
      },
      configurePreviewServer(server: any) {
        // Preview mode serves production build; no SSE reload, no HMR.
        applyMiddleware(server.middlewares, { injectReloadScript: false })
      },
    } as any,
  ]
}

function applyMiddleware(middlewares: any, options: { injectReloadScript: boolean }) {
  // Serve /dist/ files as static assets
  middlewares.use((req: any, res: any, next: any) => {
    const { url } = req
    if (!url || !url.startsWith('/dist/')) {
      next()
      return
    }
    const cleanUrl = url.split('?')[0]
    const filePath = path.join(ROOT, 'public', cleanUrl)
    try {
      const stat = statSync(filePath)
      if (stat.isFile()) {
        const ext = path.extname(filePath).toLowerCase()
        const contentType = MIME_TYPES[ext] || 'application/octet-stream'
        res.setHeader('Content-Type', contentType)
        createReadStream(filePath).pipe(res)
        return
      }
    } catch {
      // File not found, fall through
    }
    next()
  })

  // Serve HTML files directly without Vite transformation.
  // In dev mode, injects an SSE-based reload script so browsers auto-refresh
  // when watch builds update public/dist/. Preview mode serves raw HTML.
  middlewares.use((req: any, res: any, next: any) => {
    const { url } = req
    if (!url) {
      next()
      return
    }
    const cleanUrl = url.split('?')[0]
    let candidates: string[]
    if (cleanUrl === '/') {
      candidates = ['index.html']
    } else if (cleanUrl.endsWith('.html')) {
      candidates = [cleanUrl.slice(1)]
    } else {
      candidates = [`${cleanUrl.slice(1)}.html`, `${cleanUrl.slice(1)}/index.html`]
    }
    const htmlFile = candidates.find((c) => {
      try {
        return statSync(path.join(ROOT, 'public', c)).isFile()
      } catch {
        return false
      }
    })
    if (!htmlFile) {
      next()
      return
    }
    const filePath = path.join(ROOT, 'public', htmlFile)
    try {
      let html = readFileSync(filePath, 'utf-8')
      if (options.injectReloadScript) {
        const reloadScript = '<script>(function(){var e=new EventSource("/__reload");e.addEventListener("message",function(ev){if(ev.data==="reload")location.reload()});})()</script>'
        html = html.replace('</body>', `${reloadScript}</body>`)
      }
      res.setHeader('Content-Type', 'text/html')
      res.end(html)
      return
    } catch {
      // File not found, fall through
    }
    next()
  })
}

function createComponentsConfig(mode: string): UserConfig {
  const isProd = mode === 'production'
  return {
    publicDir: false,
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    build: {
      target: 'es2017',
      sourcemap: true,
      cssCodeSplit: false,
      emptyOutDir: false,
      outDir: path.resolve(ROOT, 'public/dist'),
      minify: isProd,
      assetsDir: 'assets',
      rollupOptions: {
        external: EXTERNALS,
        input: scanComponentEntries(),
        preserveEntrySignatures: 'strict',
        output: {
          format: 'es',
          entryFileNames: '[name].js',
          assetFileNames: (assetInfo) => {
            // Stable filename for the shared CSS chunk so the HTML can link to it
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'assets/style.css'
            }
            return 'assets/[name]-[hash][extname]'
          },
        },
      },
    },
  }
}

// Shared options for both dev server and preview server.
const SERVER_BASE_OPTIONS: UserConfig = {
  root: path.resolve(ROOT, 'public'),
  publicDir: false,
  appType: 'custom',
  server: {
    port: 2333,
    host: '0.0.0.0',
    fs: { strict: false },
  },
  preview: {
    port: 2333,
    host: '0.0.0.0',
  },
}

function createServeConfig(): UserConfig {
  return {
    ...SERVER_BASE_OPTIONS,
    plugins: [
      ...staticServerPlugin(),
      {
        name: 'various-reload',
        configureServer(server) {
          const distDir = path.resolve(ROOT, 'public/dist')
          const reloadClients = new Set<ServerResponse>()
          let reloadTimer: ReturnType<typeof setTimeout> | undefined

          function notifyReload() {
            clearTimeout(reloadTimer)
            reloadTimer = setTimeout(() => {
              reloadClients.forEach((client) => {
                client.write('data: reload\n\n')
              })
            }, 300)
          }

          // SSE endpoint for browser auto-reload on dist changes
          server.middlewares.use((req, res, next) => {
            if (req.url !== '/__reload') {
              next()
              return
            }
            res.writeHead(200, {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache, no-transform',
              Connection: 'keep-alive',
            })
            res.write('data: connected\n\n')
            reloadClients.add(res)
            req.on('close', () => {
              reloadClients.delete(res)
            })
          })

          // Watch public/dist for changes and notify browsers
          const distWatcher = watch(distDir, { recursive: true }, (_e, filename) => {
            if (!filename) return
            notifyReload()
          })
          server.httpServer?.on('close', () => {
            distWatcher.close()
          })
        },
      },
    ],
  }
}

function createPreviewConfig(): UserConfig {
  return {
    ...SERVER_BASE_OPTIONS,
    plugins: staticServerPlugin(),
  }
}

// Dispatcher: selects config based on TARGET env var.
export default defineConfig(({ mode }) => {
  const target = process.env.TARGET || 'serve'

  switch (target) {
    case 'components':
      return createComponentsConfig(mode)
    case 'serve':
      return createServeConfig()
    case 'preview':
      return createPreviewConfig()
    default:
      throw new Error(`Unknown TARGET: ${target}. Use: components, serve, preview`)
  }
})
