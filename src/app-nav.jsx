var React = require('react');

var AppNav = React.createClass({
  render: function () {
    return (
      <div className={'app-nav' + (this.props.fixed ? ' fixed' : '')}>
        <ul>
          <li><a onClick={this.props.scrollDown.bind(null, '.content-about')}>About</a></li>
          <li><a onClick={this.props.scrollDown.bind(null, '.content-portfolio')}>Portfolio</a></li>
          <li><a onClick={this.props.scrollDown.bind(null, '.content-blog')}>Blog</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = AppNav;
