const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, './src/index.jsx')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['src/styles/utilities']
            }
          }
        ]
      },
      {
        test: /\.(gif|jpe?g|svg)$/i,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin()
  ]
}
