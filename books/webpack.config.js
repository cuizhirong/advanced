const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: '[name].[hash:8].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(jsx|js)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Websit',
      template: './src/template/index.html',
      minify: {
        removeComments: true
      }
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', 'json'],
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, '../'),
      'node_modules'
    ],
    alias: {
      react: path.join(__dirname, 'node_modules/react'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9999,
    compress: true,
  }
}