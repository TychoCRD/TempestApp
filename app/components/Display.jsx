import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import SortSpread from 'SortSpread';
import ExportControls from 'ExportControls';


export var Display = React.createClass({
  onNewTempest: function(){
    if(window.confirm('You have saved your work and are ready to start a new Tempest?')){
      document.location.reload(true);
    }
  },
  render: function(){
    var {masterKeywords, ideas, appStage} = this.props;
    return (
      <div id="display-container">
        <SortSpread masterKeywords={masterKeywords} ideas={ideas} appStage={appStage}/>
        <div className="display-footer"></div>
        <ExportControls newTempest={this.onNewTempest}/>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Display);
