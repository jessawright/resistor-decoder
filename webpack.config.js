var webpackSettings = {
  entry: './app/app.jsx',
  output: {
    path: './site/js',
    filename: 'app.js'
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
}



}

module.exports = webpackSettings
