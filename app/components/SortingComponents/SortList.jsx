import React from 'react';


var SortList = React.createClass({
  renderBoxes: function(){
    var {ideas, displayColor} = this.props;
    var sortBoxClass = 'idea-box bg-' + displayColor;
    return ideas.map((idea, index)=>{
      return (
        <div key={index} className={sortBoxClass}></div>
      );
    });
  },
  render: function(){
    var {keyword, displayColor} = this.props;
    var titleClass = 'sortTitle-' + displayColor;
    return (
      <div>
        <h2 className={titleClass}>{keyword}</h2>
        {this.renderBoxes()}
      </div>
    );
  }
});

export default SortList;
