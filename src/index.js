'use strict';

var React = require('react')
var Application = require('./Application')

window.addEventListener('load', function() {
  React.render(<Application />, document)
})