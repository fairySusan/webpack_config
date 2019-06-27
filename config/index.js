const path = require('path')
module.exports = {
  dev: {
    assetsPublicPath: '/', // 服务器根路径
    assetsSubDirectory: 'static',
    autoOpenBrowser: true,
    host: 'localhost',
    port: 8080
  },
  build: {
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}