require('./app.less');

var React = require('react');
var _ = require('lodash');

var AppHeader = require('./app-header.jsx');
var AppNav = require('./app-nav.jsx');
var AppFooter = require('./app-footer.jsx');
var ContentAbout = require('./content/about.jsx');
var ContentTech = require('./content/tech.jsx');
var ContentPortfolio = require('./content/portfolio.jsx');
var ContentTools = require('./content/tools.jsx');
var ContentBlog = require('./content/blog.jsx');

var AppContainer = React.createClass({
  getInitialState: function () {
    return {
      fixed: false,
      scrollHeight: 0
    };
  },
  componentDidMount: function () {
    window.addEventListener('scroll', this.setFixed);
    window.addEventListener('resize', this.update);
  },
  height: function () {
    return window.innerHeight >= 500 ? window.innerHeight - 64 : (500 - 64);
  },
  width: function () {
    return window.innerWidth;
  },
  scrollDown: function (section) {
    var el = document.querySelector(section);
    var newScrollHeight = el ? window.scrollY + el.getBoundingClientRect().top - 64 : 0;

    this.setState({ scrollHeight: window.scrollY }, () => {
      var interval = setInterval(() => {
        if (this.state.scrollHeight >= newScrollHeight) {
          window.scroll(0, newScrollHeight);
          clearInterval(interval);
        }
        else {
          window.scroll(0, this.state.scrollHeight);
          this.setState({ scrollHeight: this.state.scrollHeight + 20 });
        }
      }, 5);
    });
  },
  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.setFixed);
    window.addEventListener('resize', this.update);
  },
  setFixed: _.throttle(function () {
    var rect = document.querySelector('.app-header').getBoundingClientRect();
    var fixed = false;

    if (Math.abs(rect.top) >= rect.height) fixed = true;
    if (fixed !== this.state.fixed) this.setState({ fixed: fixed });
  }, 10),
  update: function () {
    this.forceUpdate();
  },
  render: function () {
    return (
      <div className='app-container'>
        <AppHeader height={this.height} width={this.width} scrollDown={this.scrollDown} />
        <AppNav fixed={this.state.fixed} height={this.height} scrollDown={this.scrollDown}/>
        <div className={'app-content' + (this.state.fixed ? ' fixed' : '')}>
          <ContentAbout />
          <ContentTech />
          <ContentPortfolio />
          <ContentTools />
          <ContentBlog />
        </div>
        <AppFooter fixed={this.state.fixed} />
      </div>
    );
  }
});

React.render(<AppContainer />, document.body);
