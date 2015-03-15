var React = require('react');

var ContentPortfolio = React.createClass({
  render: function () {
    return (
      <div className='content-portfolio'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Portfolio</h1>
            <hr />
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
          <div className='pure-u-2-3 pure-u-sm-2-3 pure-u-md-3-5 pure-u-lg-1-2 pure-u-xl-1-2'>
            <div>
              <p>Portfolio coming soon. Check back in a little while.</p>
            </div>
          </div>
          <div className='pure-u-1-6 pure-u-sm-1-6 pure-u-md-1-5 pure-u-lg-1-4 pure-u-xl-1-4'></div>
        </div>
      </div>
    );
  }
});

module.exports = ContentPortfolio;
