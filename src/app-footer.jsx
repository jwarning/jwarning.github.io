var React = require('react');

var AppFooter = React.createClass({
  render: function () {
    return (
      <div className={'app-footer' + (this.props.fixed ? ' fixed' : '')}>
        <p>&copy; Jonathan Warning 2015. All rights reserved.</p>
        <p>This site is currently only for demonstrational purposes.</p>
      </div>
    );
  }
});

module.exports = AppFooter;
