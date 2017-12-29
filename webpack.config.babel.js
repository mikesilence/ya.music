import webpack from 'webpack';

export default {
  entry: './src/',

  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  target: 'node',

  resolve: {
    modules: [
      'node_modules'
    ]
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }, {
      test: /\.node$/,
      loader: 'node-loader'
    }]
  },

  plugins: [
    new webpack.ProvidePlugin({ window: {} })
  ]
}