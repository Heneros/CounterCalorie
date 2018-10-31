<<<<<<< HEAD
const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/app.js',
    ],

  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
=======
module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  watch: true,
  devServer: {
    contentBase: './src',
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
>>>>>>> d3d892d5bf45b9b596bc915043904debb9c4d0ca
          options: {
            presets: ['babel-preset-env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')],
          },
<<<<<<< HEAD

    }]
  }
}
=======
        },
      },
    ],
  },
};
>>>>>>> d3d892d5bf45b9b596bc915043904debb9c4d0ca
