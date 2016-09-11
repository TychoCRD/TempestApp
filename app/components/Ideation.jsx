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
  render: function(){
    return (
      <div>
        <p>Settings</p>
        <div>{this.displayKeywords()}</div>
        <div>
          <Clock/>
          <IdeaForm/>
          <IdeasDisplay/>
        </div>
      </div>
    );
  }
});


export default connect((state)=>{
  return {
    masterKeywords: state.masterKeywords
  };
})(Ideation);
