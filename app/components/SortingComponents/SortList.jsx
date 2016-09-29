import React from 'react';


var SortList = React.createClass({
  renderBoxes: function(){
    var {appStage, ideas, displayColor} = this.props;

    if(appStage === 'sorting'){
      var sortBoxClass = 'idea-box bg-' + displayColor;
      return ideas.map((idea, index)=>{
        return (
          <div key={index} className={sortBoxClass}></div>
        );
      });
    } else if(appStage === 'display'){
      var sortBoxClass = 'lg-idea-box bg-' + displayColor;
      return ideas.map((idea, index)=>{
        return (
          <div key={index} className={sortBoxClass}>{idea.text}</div>
        );
      });
    }
  },
  render: function(){
    var {appStage, keyword, displayColor} = this.props;
    var titleClass = 'sort-title sort-title-clr-' + displayColor;
    var ideaboxContainerClass = 'ideabox-container-' + appStage;
    return (
      <div className="sort-list">
        <h3 className={titleClass}>{keyword}</h3>
        <div className={ideaboxContainerClass}>
          {this.renderBoxes()}
        </div>
      </div>
    );
  }
});

export default SortList;
