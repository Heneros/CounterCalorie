const path = require('path');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
           presets: ['env', 'stage-0'],
           plugins: [require('babel-plugin-transform-object-rest-spread')],
        }
    }]
  }
}