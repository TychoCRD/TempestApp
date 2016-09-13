import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var KeywordList = React.createClass({
  renderList: function(){
    var {handleClick, masterKeywords} = this.props;

    if(masterKeywords.length === 0){
      return (<p>No keywords set</p>);
    } else {
      return masterKeywords.map((keyword, index)=>{
        return (
          <div key={index} onClick={()=>{handleClick(keyword)}}>{keyword}</div>);
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


export default KeywordList;
