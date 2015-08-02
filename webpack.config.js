module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './bootstrap.js',
    html: './index.html',
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader?stage=0'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ],
  },
}
