'use strict';

var React = require('react')
var Route = require('react-router').Route;

var Application = require('./components/Application')
var PageOne = require('./components/PageOne')
var PageTwo = require('./components/PageTwo')

module.exports = (
  <Route handler={Application}>
    <Route name="page-one" path="/page-one" handler={PageOne} />
    <Route name="page-two" path="/page-two" handler={PageTwo} />
  </Route>
)