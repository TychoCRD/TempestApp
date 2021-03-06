import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var KeywordForm = React.createClass({
  checkKeyword: function(keyword){
    var regex = /[^a-z]/;
    if(!keyword.match(regex)){
      return keyword;
    } else {
      return false;
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
    var {masterKeywords, dispatch} = this.props;
    var keyword = this.refs.keyword.value.toLowerCase();

    if(masterKeywords.length < 5 && keyword.length > 0 && this.checkKeyword(keyword)){
      keyword = this.checkKeyword(keyword);
      this.refs.keyword.value = '';
      this.refs.keyword.focus();
      dispatch(actions.addKeyword(keyword));
    }
  },
  render: function(){

    return (
      <div className="keywordform-container">
        <form onSubmit={this.handleSubmit}>
          <input className="keywordform-input" type="text" ref="keyword"/>
          <button className="button hollow keywordform-btn">+</button>
        </form>
      </div>
    );
  }
});


export default connect((state)=>{
  return {
    masterKeywords: state.masterKeywords
  };
})(KeywordForm);
