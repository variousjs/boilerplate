const path = require('path')
const fs = require('fs')
/** @type {import('@variousjs/registry').Packages} */
const registry = require('@variousjs/registry')

const components = fs
  .readdirSync(path.resolve(__dirname, './src/components'))
  .reduce((prev, cur) => {
    return {
      ...prev,
      [cur]: path.join(__dirname, `./src/components/${cur}`),
    }
  }, {})

const { entry, ...depsComponents } = Object.keys(components).reduce((prev, cur) => {
  return {
    ...prev,
    [cur]: `./dist/${cur}.js`,
  }
}, {})

/**
 * @param {keyof typeof registry} name
 */
const getPackageSrc = (name) => {
  const package = registry[name]
  const version = package['dist-tags'].latest
  const { dist, dependencies } = package.versions[version]

  if (dependencies) {
    return {
      ...Object.keys(dependencies)
        .reduce((prev, cur) => ({ ...prev, ...getPackageSrc(cur) }), {}),
      [name]: dist,
    }
  }
  return { [name]: dist }
}

/** @type {import('@variousjs/various').Config} */
const config = {
  env: 'development',
  entry,
  dependencies: {
    ...getPackageSrc('react'),
    ...getPackageSrc('react-dom'),
    ...getPackageSrc('react-router-dom'),
    'shadcn-ui': './dist/shadcn-ui.js',
    ...depsComponents,
  },
  pages: [
    {
      path: '/',
      components: ['card', 'next']
    },
    {
      path: '/com/:id',
      components: ['card', 'next']
    },
    {
      path: '/error',
      components: ['error'],
    },
  ],
  links: [
    {
      name: 'Router `/`',
      path: '/',
    },
    {
      name: 'Router `/com/5`',
      path: '/com/5',
    },
    {
      name: 'Router `error`',
      path: '/error',
    },
  ],
}

module.exports = { config, components }
