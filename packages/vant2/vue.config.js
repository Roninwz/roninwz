const path = require('path')


function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  parallel: false, // 使用多进程并行运行来提高构建速度
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  publicPath: './',
  lintOnSave: false, // 关闭eslint
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    config.resolve.alias['@'] = resolve('src')
  },
}
