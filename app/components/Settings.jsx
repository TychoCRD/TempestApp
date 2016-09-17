import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import CountdownSet from 'CountdownSet';
import KeywordForm from 'KeywordForm';
import KeywordList from 'KeywordList';

export var Settings = React.createClass({
  handleClick: function(){
    var {dispatch, masterKeywords} = this.props;
    if(masterKeywords.length === 0){
        dispatch(actions.updateAppStage('ideation'));
    } else {
      dispatch(actions.toggleLoadingStatus());
      dispatch(actions.updateAppStage('loading'));
      dispatch(actions.getAllKeywords(masterKeywords));
    }
  },
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
  deleteKeyword: function(keyword){
    var {dispatch} = this.props;
    dispatch(actions.removeKeyword(keyword));
  },
  render: function(){
    var {count, masterKeywords, dispatch} = this.props;
    return (
      <div>
        <p>Settings</p>
        <CountdownSet count={count} changeTime={this.updateCount}/>
        <KeywordForm/>
        <KeywordList handleClick={this.deleteKeyword} masterKeywords={masterKeywords}/>
        <button className="button" onClick={()=>{this.handleClick()}}>Start</button>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Settings);
