import React from 'react';

 var ExportControls = React.createClass({
  handlePrintClick: function(){
     window.print();
  },
  render: function(){
    var {newTempest} = this.props;
    (function(){
    new Clipboard('#copy-button');
    })();
    return (
      <div className="exportcontrols-container">
        <button className="button" onClick={()=>{this.handlePrintClick()}}>Save to PDF</button>
        <button id="copy-button" className="button" data-clipboard-target="#sort-spread-for-copy">Copy Text</button>
        <button className="button hollow" onClick={()=>{newTempest()}}>New Tempest</button>
      </div>
    );
  }
});

export default ExportControls;
