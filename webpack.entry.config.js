const { join } = require('path')
const base = require('./webpack.base.config')

const config = {
  ...base,
  entry: {
    entry: join(__dirname, './src/entry'),
  },
}

module.exports = config
