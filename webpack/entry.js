const base = require('./base')

const { entry } = base.entry
const config = {
  ...base,
  entry: { entry },
}

module.exports = config
