let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/index.js',
    style: './style.css'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { parser: { amd: false }},
      { test: /\.md$/, use: 'raw-loader' },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      'Reveal': 'reveal.js',
      'hljs': 'reveal.js/plugin/highlight/highlight.js'
    })

  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist', './assets'],
    port: 4000,
    host: '0.0.0.0'
  }

};
