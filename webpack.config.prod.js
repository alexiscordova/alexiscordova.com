import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.jsx')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader?sourceMap',
              options: {
                includePaths: ['src/styles/utilities']
              }
            }
          ]
        })
      },
      {
        test: /\.(gif|jpe?g|svg)$/i,
        use: [
          'image-webpack-loader',
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    // Set React to compile production build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // Generate external CSS file
    new ExtractTextPlugin('style.[contenthash].css'),

    // MD5 hash files for cache busting
    new WebpackMd5Hash(),

    // Create favicons
    new FaviconsWebpackPlugin({
      logo: './src/favicon.png',
      prefix: './src/assets/images/favicons/',
      inject: true
    }),

    // Create HTML index file
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ]
}
