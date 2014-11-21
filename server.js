require('node-jsx').install()

var express = require('express')
var app = express()
var serverApp = require('./src/server')

app.use(express.static('build'));

app.get('*', function (req, res) {
  res.send(serverApp())
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})