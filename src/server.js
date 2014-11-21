'use strict';

var React = require('react')
var Application = require('./Application')

module.exports = function() {
  return React.renderToString(<Application />);
}