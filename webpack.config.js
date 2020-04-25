const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log('DEV', isDev)

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
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
      ],
    },
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

module.exports = {
  context: path.resolve(__dirname, './english-for-kids/src'),
  mode: 'development',
  entry: {
    main: './index.js',
    card: './moduleCards.js',
    const: './moduleConst.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    hot: isDev,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, './english-for-kids/src/favicon.ico'),
      to: path.resolve(__dirname, 'dist'),
    }, {
      from: path.resolve(__dirname, './english-for-kids/src/img'),
      to: path.resolve(__dirname, 'dist/img'),
    },
    {
      from: path.resolve(__dirname, './english-for-kids/src/audio'),
      to: path.resolve(__dirname, 'dist/audio'),
    }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
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
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'dist/img',
        },
      }],
    },
    {
      test: /\.(ttf|woff|woff2|eot)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './dist/assets/fonts',
        },
      }],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: jsLoaders(),
    },
    ],
  },
}
