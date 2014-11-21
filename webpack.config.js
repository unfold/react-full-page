var client = {
  context: __dirname + '/src',
  entry: './client',

  output: {
    path: __dirname + '/build',
    publicPath: 'build',
    filename: 'client.js'
  },

  module: {
    loaders: [
      { test: /.js$/, loader: 'jsx?harmony&insertPragma=React.DOM' }
    ]
  }
}

module.exports = [client]