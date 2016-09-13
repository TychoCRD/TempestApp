import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import Clock from 'Clock';
import IdeaForm from 'IdeaForm';
import IdeasDisplay from 'IdeasDisplay';

export var Ideation = React.createClass({
  componentDidMount: function(){
    var {dispatch} = this.props;
    this.timer = setInterval(()=>{
      dispatch(actions.countDown());
    }, 1000);
  },
  componentDidUpdate: function(){
    var {count, dispatch, masterKeywords} = this.props;
    if(count === 0){
        if(masterKeywords.length === 0){
        dispatch(actions.updateAppStage('display'));
        } else {
        dispatch(actions.updateAppStage('sorting'));
      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },
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
    var {count} = this.props;
    return (
      <div>
        <p>Settings</p>
        <div>{this.displayKeywords()}</div>
        <div>
          <Clock count={count}/>
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
