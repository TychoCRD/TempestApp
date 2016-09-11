import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var Ideas = React.createClass({
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !ideas.sorted);
  },
  getIdeaNum: function(){
    var filteredIdeas = this.filterIdeas();
    var ideaNum = filteredIdeas.length;
    if(ideaNum === 0){
      return '0 ideas';
    } else if (ideaNum === 1){
      return '1 idea';
    } else {
      return ideaNum + ' ideas'
    }
  },
  renderBoxes: function(){
    var filteredIdeas = this.filterIdeas();
    return filteredIdeas.map((idea, index)=>{
      return (
        <div key={index} className={idea.boxClass}></div>
      );
    });
  },
  render: function(){
    return (
      <div>
        <p>{this.getIdeaNum()}</p>
        <div>
        {this.renderBoxes()}
        </div>
      </div>
    );
  }
});

export default connect((state)=>{
  return {
    ideas: state.ideas
  };
})(Ideas);
