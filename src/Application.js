'use strict';

var React = require('react')

var Application = React.createClass({
  getInitialState: function() {
    return {
      message: 'Click me',
      title: 'React full page!'
    }
  },

  onClick: function() {
    this.setState({
      message: 'Omg, you just clicked the body',
      title: 'Body movin\''
    })
  },

  render: function() {
    return (
      <html>
        <head>
          <title>{this.state.title}</title>
        </head>
        <body className="application" onClick={this.onClick}>
          {this.state.message}

          <script src="/client.js" />
        </body>
      </html>
    )
  }
})

module.exports = Application