import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import CountdownSet from 'CountdownSet';
import KeywordForm from 'KeywordForm';
import KeywordList from 'KeywordList';

export var Settings = React.createClass({
  updateCount: function(adjustment){
    var {count, dispatch} = this.props;
    switch(adjustment){
      case 'decrease':
        return count > 30 ? dispatch(actions.decreaseCount()) : null;
        break;
      case 'increase':
        return count < 600 ?
        dispatch(actions.increaseCount()) : null;
        break;
    }
  },
  render: function(){
    var {count, dispatch} = this.props;
    return (
      <div>
        <p>Settings</p>
        <CountdownSet count={count} changeTime={this.updateCount}/>
        <KeywordForm/>
        <KeywordList/>
        <button className="button" onClick={()=>{dispatch(actions.updateAppStage('ideation'));}}>Start</button>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Settings);
