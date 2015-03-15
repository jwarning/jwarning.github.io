var React = require('react');

var ContentTech = React.createClass({
  render: function () {
    return (
      <div className='content-tech'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Tech</h1>
            <hr />
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-code fa-icon'></span>
              <span className='icon-subtext'>Front End</span>
              <span className='icon-detail'>JavaScript, HTML, CSS</span>
            </div>
          </div>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-server fa-icon'></span>
              <span className='icon-subtext'>Server Side</span>
              <span className='icon-detail'>Node.js, C#, ASP.NET</span>
            </div>
          </div>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-database fa-icon'></span>
              <span className='icon-subtext'>Storage</span>
              <span className='icon-detail'>MS SQL Server, CouchDB, MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContentTech;
