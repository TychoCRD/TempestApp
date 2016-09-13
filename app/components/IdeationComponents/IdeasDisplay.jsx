import React from 'react';

export var IdeasDisplay = React.createClass({
  getIdeaNum: function(){
    var {filteredIdeas} = this.props;
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
    var {filteredIdeas} = this.props;
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

export default IdeasDisplay;
