import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var KeywordForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {masterKeywords, dispatch} = this.props;
    var keyword = this.refs.keyword.value;

    if(masterKeywords.length < 5){
      if(keyword.indexOf(' ') > -1){
        keyword = keyword.split(' ')[0];
      }
      this.refs.keyword.value = '';
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
