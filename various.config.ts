import fs from 'fs'
import path from 'path'

const ROOT = process.cwd()

// Auto-discover components from src/components/
const components = fs
  .readdirSync(path.resolve(ROOT, './src/components'))
  .reduce<Record<string, string>>((prev, cur) => {
    return {
      ...prev,
      [cur]: path.join(ROOT, `./src/components/${cur}`),
    }
  }, {})

// Component dependency paths (used in VARIOUS_CONFIG)
const depsComponents = Object.keys(components).reduce<Record<string, string>>((prev, cur) => {
  return {
    ...prev,
    [cur]: `./dist/${cur}.js`,
  }
}, {})

// Application config
const config = {
  dependencies: {
    react: 'https://esm.sh/react@19.2.0',
    'react-dom': 'https://esm.sh/react-dom@19.2.0?deps=react@19.2.0',
    'react-dom/client': 'https://esm.sh/react-dom@19.2.0/client?deps=react@19.2.0',
    'react-router-dom': 'https://esm.sh/react-router-dom@6.22.1?deps=react@19.2.0,react-dom@19.2.0',
    vue: 'https://esm.sh/vue@3.5.40',
    ...depsComponents,
  },
  pages: [
    {
      path: '/',
      components: ['card', 'next'],
    },
    {
      path: '/next/:id',
      components: ['card', 'next'],
    },
    {
      path: '/error',
      components: ['error'],
    },
  ],
  links: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Next',
      path: '/next/5',
    },
    {
      name: 'Error',
      path: '/error',
    },
  ],
}

export { config, components }
