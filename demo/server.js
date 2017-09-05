const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Webpack = require('webpack')
const WebpackDevServer = require("webpack-dev-server")

const config = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, '/public'),
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: path.join(__dirname, 'index.html'),
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    alias: {
      'root': path.join(__dirname),
      'components': path.join(__dirname, 'src'),
      'styles': path.join(__dirname, 'scss')
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, '/src'),
      query: {
        presets: [
          'es2015',
          'env',
          'react',
          'stage-0',
          'stage-1',
          'stage-2',
          'stage-3'
        ],
        plugins: [
          'transform-decorators-legacy',
          'transform-es2015-block-scoped-functions',
          'transform-function-bind',
          'transform-react-inline-elements'
        ]
      }
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}

const compiler = Webpack(config)

const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, 'public'),
  noInfo: false,
  quiet: false,
  lazy: false,
  publicPath: '/',
  stats: {
    colors: true,
    chunks: false
  }
})

server.listen(3000, 'localhost', () => {
  console.log('Webpack Dev Server is listening on port 3000')
})
