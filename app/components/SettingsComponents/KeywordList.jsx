import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var KeywordList = React.createClass({
  handleClick: function(e){
    var {dispatch} = this.props;
    var keyword = e.currentTarget.textContent;
    dispatch(actions.removeKeyword(keyword));
  },
  renderList: function(){
    var {masterKeywords} = this.props;
    if(masterKeywords.length === 0){
      return (<p>No keywords set</p>);
    } else {
      return masterKeywords.map((keyword, index)=>{
        return (
          <div key={index} onClick={this.handleClick}>{keyword}</div>);
      });
    }
  },
  render: function(){
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
});


export default connect((state)=>{
  return {
    masterKeywords: state.masterKeywords
  };
})(KeywordList);
