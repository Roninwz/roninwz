const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  parallel: false, // 使用多进程并行运行来提高构建速度
  publicPath: './',
  lintOnSave: false, // 关闭eslint
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    config.resolve.alias['@'] = resolve('src')
  },
}
