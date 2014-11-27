require('node-jsx').install()

var express = require('express')
var app = express()
var render = require('./src/server')

app.use(express.static('build'));

app.get('/favicon.ico', function (req, res) {
  res.status(404);
});

app.get('*', function (req, res) {
  render(req.path, function(html) {
    res.status(200).send(html).end()
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})