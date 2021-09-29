const { join } = require('path')
const base = require('./webpack.base.config')

const config = {
  ...base,
  watch: true,
  entry: {
    component: join(__dirname, './src/component.tsx'),
  },
}

module.exports = config
