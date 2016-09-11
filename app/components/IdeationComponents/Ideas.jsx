import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var Ideas = React.createClass({
  getIdeaNum: function(){
    var {ideas} = this.props;
    var ideaNum = ideas.length;
    if(ideaNum === 0){
      return '0 ideas';
    } else if (ideaNum === 1){
      return '1 idea';
    } else {
      return ideaNum + ' ideas'
    }
  },
  renderBoxes: function(){
    var {ideas} = this.props;
    return ideas.map((idea, index)=>{
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
