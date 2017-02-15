var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackSettings = {
 entry: './app/app.jsx',
 output: {
  publicPath: 'https://jessawright.github.io/resistor-decoder/',
  path: './site',
  filename: '/js/app.js'
 },
 module: {
  loaders: [{
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
     presets: ['es2015', 'react']
    }
   }, {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('css!sass')
   },
   {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=assets/fonts/[name].[ext]'
   },
   {
    test: /\.(jpe?g|png|gif|svg|ico)$/i,
    loader: 'file?name=assets/images/[name].[ext]'
   }
  ]

 },
 plugins: [
  new ExtractTextPlugin('styles/style.css', {
   allChunks: true
  })
 ]
}

module.exports = webpackSettings
