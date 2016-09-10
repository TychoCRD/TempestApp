import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import CountdownSet from 'CountdownSet';
import KeywordForm from 'KeywordForm';
import KeywordList from 'KeywordList';

export var Settings = React.createClass({
  render: function(){
    var {dispatch} = this.props;
    return (
      <div>
        <p>Settings</p>
        <CountdownSet/>
        <KeywordForm/>
        <KeywordList/>
        <button className="button" onClick={()=>{dispatch(actions.updateAppStage('ideation'));}}>Start</button>
      </div>
    );
  }
});


export default connect()(Settings);
