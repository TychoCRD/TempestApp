import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import IdeasDisplay from 'IdeasDisplay';
import IdeaShowcase from 'IdeaShowcase';
import IdeaSorter from 'IdeaSorter';
import SortSpread from 'SortSpread';
import SortList from 'SortList';

export var Sorting = React.createClass({
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !idea.sorted);
  },
  getIdea: function(){
    var {dispatch} = this.props;
    var filteredIdeas = this.filterIdeas();
    if(filteredIdeas.length > 0){
      return filteredIdeas[0].text;
    } else {
      setTimeout(()=>{
        dispatch(actions.updateAppStage('display'));
      }, 2000);
      return 'All ideas sorted!';
    }
  },
  sortIdea: function(keyword){
    var {dispatch} = this.props;
    var filteredIdeas = this.filterIdeas();
    dispatch(actions.sortIdea(filteredIdeas[0].id, keyword));
  },
  render: function(){
    var {masterKeywords} = this.props;
    return (
      <div>
        <div>
          <IdeasDisplay filteredIdeas={this.filterIdeas()}/>
        </div>
        <IdeaShowcase ideaText={this.getIdea()}/>
        <IdeaSorter masterKeywords={masterKeywords} handleClick={this.sortIdea}/>
        <SortSpread/>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Sorting);
