const path = require('path');
const config = require('../config');
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const webpack = require('webpack');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map', // 可在浏览器控制台调试源码,不过会减慢打包速度
  devServer: {
    open: config.dev.autoOpenBrowser,
    contentBase: path.resolve(__dirname, "../dist"), // 告诉服务器文件资源在哪里
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    hot: true, // 开启模块热更新
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),  // 模块热更新插件
    new webpack.DefinePlugin({
      'process.env.PROD_NAME': JSON.stringify(process.env.PROD_NAME), // 此插件用于定义一些源文件可以拿到的变量
    })
  ]
});
module.exports = devWebpackConfig;