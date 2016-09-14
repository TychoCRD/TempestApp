import React from 'react';

var IdeaSorter = React.createClass({
  renderButtons: function(){
    var {masterKeywords, handleClick} = this.props;
    var btnClass = 'button keywordBtn bg-';
    return masterKeywords.map((keyword, index)=>{
      return (
        <button key={index} className={btnClass + (index+1)} onClick={()=>{handleClick(keyword)}}>{keyword}</button>
      );
    });
  },
  render: function(){
    return (
      <div className="idea-sorter-container">
        {this.renderButtons()}
      </div>
    );
  }
});

export default IdeaSorter;
