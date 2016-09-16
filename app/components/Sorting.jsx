import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import IdeasAPI from 'IdeasAPI';
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
  renderSorter: function(){
    var {masterKeywords} = this.props;
    var filteredIdeas = this.filterIdeas();
    if(filteredIdeas.length > 0){
      return <IdeaSorter masterKeywords={masterKeywords} handleClick={this.sortIdea}/>;
    } else {
      return null;
    }
  },
  render: function(){
    var {masterKeywords, ideas, appStage} = this.props;
    return (
      <div className="sorting-container">
        <div className="ideasDisplay-container-sorting">
          <IdeasDisplay filteredIdeas={this.filterIdeas()}/>
        </div>
        <IdeaShowcase ideaText={this.getIdea()}/>
        {this.renderSorter()}
        <SortSpread masterKeywords={masterKeywords} ideas={ideas} appStage={appStage}/>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Sorting);
