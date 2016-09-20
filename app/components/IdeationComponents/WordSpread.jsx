import React from 'react';

export var WordSpread = React.createClass({
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
  render: function(){
    var {word} = this.props;
    return (
      <div className="word-spread-container">
        {this.displayWords(word)}
      </div>
    );
  }
});

export default WordSpread;
