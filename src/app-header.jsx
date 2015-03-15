var React = require('react');

var AppHeader = React.createClass({
  render: function () {
    return (
      <div className='app-header' style={{
          height: this.props.height()
        }}>
        <div className='text-container'>
          <h1>Jonathan Warning</h1>
          <h2>Front End Web Developer</h2>
        </div>

        <div className='text-container' style={{ marginTop: 50 }}>
          <h3>
            <span>Specialising in dynamic, interactive and reactive  </span>
            <br />
            <span>user interfaces through modern JavaScript.</span>
          </h3>
        </div>

        <div className='scroll-more' style={{
            top: this.props.height() - 100,
            left: this.props.width() / 2 - 25
        }} onClick={this.props.scrollDown.bind(null, '.content-about')}>
          <div>More</div>
          <span className='fa fa-angle-double-down'></span>
        </div>
      </div>
    );
  }
});

module.exports = AppHeader;
