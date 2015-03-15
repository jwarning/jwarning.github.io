var React = require('react');

var ContentTools = React.createClass({
  render: function () {
    return (
      <div className='content-tools'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Tools</h1>
            <hr />
          </div>
        </div>
        <div className='pure-g'>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-facebook-official fa-icon'></span>
              <span className='icon-subtext'>React + JSX</span>
              <span className='icon-detail'>UI framework</span>
            </div>
          </div>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-file-code-o fa-icon'></span>
              <span className='icon-subtext'>Atom</span>
              <span className='icon-detail'>Text editor / IDE</span>
            </div>
          </div>
          <div className='pure-u-1-3'>
            <div className='content-block'>
              <span className='fa fa-github fa-icon'></span>
              <span className='icon-subtext'>Github</span>
              <span className='icon-detail'>Source control</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContentTools;
