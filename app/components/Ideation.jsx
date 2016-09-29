import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

import WordSpread from 'WordSpread';
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
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !idea.sorted);
  },
  render: function(){
    var {count, allKeywords} = this.props;
    return (
      <div className="ideation-container">
        <div className="ideation-left-block">
          <div className="ideation-clock-words-container">
            <Clock count={count}/>
            <WordSpread allKeywords={allKeywords} word={this.flashWord}/>
          </div>
          <IdeaForm/>
        </div>
        <div className="ideasdisplay-container-ideation">
        <IdeasDisplay filteredIdeas={this.filterIdeas()}/>
        </div>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Ideation);
