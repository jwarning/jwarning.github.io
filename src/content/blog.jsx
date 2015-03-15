var React = require('react');

var ContentBlog = React.createClass({
  render: function () {
    return (
      <div className='content-blog'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Blog</h1>
            <hr />
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
          <div className='pure-u-2-3 pure-u-sm-2-3 pure-u-md-3-5 pure-u-lg-1-2 pure-u-xl-1-2'>
            <div>
              <p>Medium blog coming soon too!</p>
            </div>
          </div>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
        </div>
      </div>
    );
  }
});

module.exports = ContentBlog;
