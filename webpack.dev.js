const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
  },
  output: {
    publicPath: '/',
    assetModuleFilename: 'img/[name][ext]'
  },
  module: {
    rules: [{
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource',
    }, ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    open: true,
  }   
});