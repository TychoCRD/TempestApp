import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var IdeaSorter = React.createClass({
  sortIdea: function(keyword){
    var {dispatch} = this.props;
    var filteredIdeas = this.filterIdeas();
    dispatch(actions.sortIdea(filteredIdeas[0].id, keyword));
  },
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !ideas.sorted);
  },
  getIdea: function(){
    var filteredIdeas = this.filterIdeas();
    return filteredIdeas[0].text;
  },
  renderButtons: function(){
    var {masterKeywords} = this.props;
    var btnClass = 'keywordBtn bg-';
    return masterKeywords.map((keyword, index)=>{
      return (
        <button key={index} className={btnClass + (index+1)} onClick={()=>{this.sortIdea(keyword)}}>{keyword}</button>
      );
    });
  },
  render: function(){
    return (
      <div>
        <div>{this.getIdea()}</div>
        <div>{this.renderButtons()}</div>
      </div>
    );
  }
});

export default connect((state)=>{
  return state;
})(IdeaSorter);
