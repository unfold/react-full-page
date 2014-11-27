'use strict';

var React = require('react')
var Router = require('react-router')
var routes = require('./routes')

window.addEventListener('load', function() {
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document)
  })
})