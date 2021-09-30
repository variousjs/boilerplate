const base = require('./webpack.base.config')

const { entry, ...rest } = base.entry
const config = {
  ...base,
  // 监听变化，重新构建
  watch: true,
  // 除主 entry 外所有 component
  entry: rest,
}

module.exports = config
