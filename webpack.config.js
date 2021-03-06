var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js'
  },

  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './src'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, './src')
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  module:  {
    loaders: [
      {       
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1?sourceMap', 'sass-loader?sourceMap'],
        exclude: ['node_modules']
      },


      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
    }
    ]
    // rules: [
    // {
    //   test: /\.scss$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: "style-loader",
    //     use: "css-loader!sass-loader"
    //   })
    // }
    // ]

  },
  plugins: [
    // new ExtractTextPlugin("./styles/css/styles.css"),
    // new OptimizeCssAssetsPlugin({
    // assetNameRegExp: /\.css$/,
    // cssProcessorOptions: {
    //   discardComments: { removeAll: true }}
    // })
  ]
};