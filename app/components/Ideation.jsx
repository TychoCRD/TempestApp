import React from 'react';
import {connect} from 'react-redux';

import Clock from 'Clock';
import IdeaForm from 'IdeaForm';
import IdeasDisplay from 'IdeasDisplay';

export var Ideation = React.createClass({
  displayKeywords: function(){
    var {masterKeywords} = this.props;
    if(masterKeywords.length === 0){
      return (<p>No keywords set</p>);
    } else {
      return masterKeywords.map((keyword, index)=>{
        return (
          <div key={index} onClick={this.handleClick}>{keyword}</div>);
      });
    }
  },
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !idea.sorted);
  },
  render: function(){
    return (
      <div>
        <p>Settings</p>
        <div>{this.displayKeywords()}</div>
        <div>
          <Clock/>
          <IdeaForm/>
          <IdeasDisplay filteredIdeas={this.filterIdeas()}/>
        </div>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Ideation);
