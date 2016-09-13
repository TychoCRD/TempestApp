import React from 'react';

import SortList from 'SortList';

var SortSpread = React.createClass({
  filterIdeasByKeyword: function(keyword){
    var {ideas} = this.props;
    return ideas.filter((idea) => idea.sort === keyword);
  },
  renderSortLists: function(){
    var {masterKeywords, appStage} = this.props;
    var sortlistClass = '';
    return masterKeywords.map((keyword, index)=>{
      return (
        <SortList key={index} appStage={appStage} keyword={keyword} displayColor={index+1} ideas={this.filterIdeasByKeyword(keyword)}/>
      );
    });
  },
  render: function(){
    return (
      <div className="sort-spread">
        {this.renderSortLists()}
      </div>
    );
  }
});

export default SortSpread;
