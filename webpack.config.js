const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'ReactInputSelect.js'),
  output: {
    filename: 'ReactInputSelect.js',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'lib'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
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
