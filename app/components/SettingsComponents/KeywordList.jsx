import React from 'react';

var KeywordList = React.createClass({
  renderList: function(){
    var {handleClick, masterKeywords} = this.props;

    if(masterKeywords.length === 0){
      return (<p>[ Enter up to 5 keywords: no numbers, spaces, punctuation ]</p>);
    } else {
      return masterKeywords.map((keyword, index)=>{
        var keywordClass = 'keywordlist-keyword bg-' + (index+1);
        return (
          <div key={index} className={keywordClass} onClick={()=>{handleClick(keyword)}}><span>{keyword}</span><i className="fa fa-close"/></div>);
      });
    }
  },
  render: function(){
    return (
      <div className="keywordlist-container">
        {this.renderList()}
      </div>
    );
  }
});


export default KeywordList;
