// 开发环境配置
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

var proxy ={
    context: '8888',
    pathRewrite: {},
    secure: false//skip verify the SSL Certs
};

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://0.0.0.0:8888/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

//   devServer: {
//     historyApiFallback: true,
//     stats: 'minimal'
//   }
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 8888,
    host: '0.0.0.0',
    proxy: proxy
  }
});
