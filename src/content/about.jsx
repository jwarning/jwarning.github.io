var React = require('react');

var ContentAbout = React.createClass({
  render: function () {
    return (
      <div className='content-about'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>About</h1>
            <hr />
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
          <div className='pure-u-2-3 pure-u-sm-2-3 pure-u-md-3-5 pure-u-lg-1-2 pure-u-xl-1-2'>
            <div>
              <p>Hi, I'm Jonathan, and I make websites. I focus mostly on the front-end side of things, especially dynamic and interactive user interfaces.
              I love to work with the latest JavaScript libraries to create interesting and engaging web interfaces that help the user really enjoy their
              experience with the product.</p>
            </div>
          </div>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
        </div>
      </div>
    );
  }
});

module.exports = ContentAbout;
