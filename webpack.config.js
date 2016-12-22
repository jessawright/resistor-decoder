var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackSettings = {
  entry: './app/app.jsx',
  output: {
    path: './site/js',
    filename: 'app.js'
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
    }]

  },
  plugins: [
    new ExtractTextPlugin('../styles/style.css', {
      allChunks: true
    })
  ]
}

module.exports = webpackSettings
