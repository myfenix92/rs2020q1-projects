const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin(),
    ]
  }
  return config
}

const cssLoaders = (extra) => {
  const loaders = [{
    loader: MiniCssExtractPlugin.loader,
    options: {
      hmr: isDev,
      reloadAll: true,
    },
  }, 'css-loader']

  if (extra) {
    loaders.push(extra)
  }
  return loaders
}

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
        ],
      },
    },
  ]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.js'],
    post: './post.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: optimization(),
  devServer: {
    port: 8080,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: cssLoaders(),
    },
    {
      test: /\.s[ac]ss$/,
      use: cssLoaders('sass-loader'),
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      use: ['file-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: jsLoaders(),
    },
    ],
  },
}
