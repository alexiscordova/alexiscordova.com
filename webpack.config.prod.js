const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const SvgStore = require('webpack-svgstore-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      Images: path.resolve(__dirname, 'src/assets/images/'),
      Svg: path.resolve(__dirname, 'src/assets/svg/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Data: path.resolve(__dirname, 'src/data/')
    }
  },

  devtool: 'cheap-module-source-map',
  entry: {
    main: path.resolve(__dirname, 'src/index.jsx')
  },

  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js'
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
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                importLoaders: 1
              }
            },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              options: {
                resources: [
                  'src/styles/utilities/_mixins.scss',
                  'src/styles/base/_type-setting.scss',
                  'src/styles/base/_colors.scss'
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        exclude: /node_modules/,
        use: [
          'file-loader?name=[path][name].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                quality: 65,
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquaint: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },

  plugins: [
    new WebpackMd5Hash(),

    new SvgStore({
      prefix: ''
    }),

    // Set React to compile production build
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // Generate external CSS file
    new ExtractTextPlugin({
      filename: 'src/styles/[name]-[chunkhash].css',
      disable: process.env.NODE_ENV === 'development'
    }),

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
        minifyURLs: true
      },
      inject: true
    }),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),

    new StyleLintPlugin()
  ]
}
