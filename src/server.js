'use strict';

var React = require('react')
var Router = require('react-router')
var routes = require('./routes')

module.exports = function(path, callback) {
  Router.run(routes, path, function(Handler) {
    if(callback) {
      callback(React.renderToString(<Handler />))
    }
  })
}