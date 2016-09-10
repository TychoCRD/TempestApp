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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="keyword" placeholder="Enter up to 5 keywords"/>
          <button className="button hollow">+</button>
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
