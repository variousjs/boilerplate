const base = require('./webpack.base.config')

const { entry } = base.entry
const config = {
  ...base,
  entry: { entry },
}

module.exports = config
