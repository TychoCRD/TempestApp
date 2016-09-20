import React from 'react';

 var ExportControls = React.createClass({
  handleClick: function(){
     window.print();
  },
  render: function(){
    return (
      <div className="display-controls-container">
        <button className="button" onClick={()=>{this.handleClick()}}>Save to PDF</button>
      </div>
    );
  }
});

export default ExportControls;
