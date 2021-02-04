const path = require('path');
const webpack = require('webpack');
const utils = require('./utils')
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 每次运行npm run build 可以自动清理上一次打包的文件
const GitInfoWebpack = require('../plugin/index')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // 压缩css代码
console.log('welcome', process.env.PROD_NAME); // 通过cross-env插件定义PROD_NAME，但是在源文件里无法获取，需要DefinePlugin插件

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'source-map', // 生产环境可在浏览器上调试源码，不建议，这样会暴露源码。可设置为none
  output: {
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? // 根据mode的值来的
      config.build.assetsPublicPath : config.dev.assetsPublicPath, // 这个代表项目能在localhost：3000下正确访问，是服务的根目录
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})   // 压缩css代码，去掉空格这些，在安装在生产环境下
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.PROD_NAME': JSON.stringify(process.env.PROD_NAME), // 此插件用于定义一些源文件可以拿到的变量
    }),
    new GitInfoWebpack()
  ]
});
module.exports = prodWebpackConfig;