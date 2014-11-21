var express = require('express')
var app = express()

// Todo: Figure out how to reload module when it changes
// (or on load), so that it gets the newest changes of module
var serverApp = require('./build/server')

app.use(express.static('build'));

app.get('*', function (req, res) {
  res.send(serverApp())
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})