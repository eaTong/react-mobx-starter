/**
 * Created by 7wingsfish on 2016/4/25.
 */
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    new HtmlwebpackPlugin({
      template: path.resolve(ROOT_PATH, 'index-production.html'),
      filename: 'index.html',
      //要把script插入到标签里
      inject: false,
    }),
    new ExtractTextPlugin("style.css")
  ],

  resolve: {
    alias: {
      'react$': path.resolve(__dirname, './node_modules/react/dist/react.min.js'),
      'react-dom$': path.resolve(__dirname, './node_modules/react-dom/dist/react-dom.min.js')
    }
  },
  module: {
    postLoaders: [{
      test: /\.js$/,
      loader: "webpack-strip?strip[]=console.log",
      include: path.join(__dirname, 'src')
    }],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.woff$/,
      loader: 'url?limit=100000'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }, {
      test: /\.(svg|ttf)$/,
      loader: 'url?limit=100000'
    }]
  }
};
