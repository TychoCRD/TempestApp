import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import SortSpread from 'SortSpread';
import ExportControls from 'ExportControls';


export var Display = React.createClass({
  render: function(){
    var {masterKeywords, ideas, appStage} = this.props;
    return (
      <div>
        <SortSpread masterKeywords={masterKeywords} ideas={ideas} appStage={appStage}/>
        <ExportControls/>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Display);
