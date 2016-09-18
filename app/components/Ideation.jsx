import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import Clock from 'Clock';
import IdeaForm from 'IdeaForm';
import IdeasDisplay from 'IdeasDisplay';

export var Ideation = React.createClass({
  componentDidMount: function(){
    var {dispatch, allKeywords} = this.props;
    this.wordChoice = {count: 0, cap: (allKeywords.length-1)};
    this.flashWord = allKeywords[0];
    this.timer = setInterval(()=>{
      // var {allKeywords} = this.props;
      if(this.wordChoice.count < this.wordChoice.cap){
        this.wordChoice.count++;
      } else {
        this.wordChoice.count = 0;
      }
      this.flashWord = allKeywords[this.wordChoice.count];
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
    this.wordCount = undefined;
    this.timer = undefined;
  },
  flashWord: ' ',
  displayWords: function(flashWord){
    var {allKeywords} = this.props;
    if(allKeywords.length === 0){
      return (<h2>Tempest</h2>);
    } else {
        return (
          <div><h2>{flashWord}</h2></div>
        );
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
        <p>Ideation</p>
        <div>{this.displayWords(this.flashWord)}</div>
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
