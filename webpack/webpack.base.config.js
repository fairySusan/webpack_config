const config = require('../config');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 可以npm run build 后，在dist文件夹下生成index.html文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 可以使css，less打包成单独的css文件，而不是嵌在js文件里面
module.exports = {
    entry: {
      main: './src/main.js',
      main2: './src/main2.js'
    },
    output: {
      filename: '[name].js',
      path: config.build.assetsRoot,
      publicPath: process.env.NODE_ENV === 'production' ?
        config.build.assetsPublicPath : config.dev.assetsPublicPath, // 这个代表项目能在localhost：3000下正确访问，是服务的根目录
    },
    module: {
        rules: [
            {test: /\.(css|less)$/, use: [{
              loader: MiniCssExtractPlugin.loader,   // 如果使用了MiniCssExtractPlugin插件，就不要使用 style-loader
              options: {
                publicPath: '../'
              }
            },'css-loader','less-loader']},
            {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader',{
                loader: 'image-webpack-loader',  // 压缩图片的loader
                options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 100
                    },
                    optipng: {
                      enabled: false,
                    },
                    pngquant: {
                      quality: '65-90',
                      speed: 4
                    },
                    gifsicle: {
                      interlaced: false,
                    },
                    webp: {
                      quality: 75
                    }
                  }
            }]},
        ]
    },
    optimization: {
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: "css/[id].css"
      }),
      // 多页面打包
      new HtmlWebpackPlugin({
        title: 'index', // <title>标签的内容
        filename: 'index.html',
        chunks: ['main'],
        template: './index.html', // 以哪一个html为模版
      }),
      new HtmlWebpackPlugin({
        title: 'index2', // <title>标签的内容
        filename: 'index2.html',
        chunks: ['main2'],
        template: './index2.html', // 以哪一个html为模版
      }),
    ]
}