import React from 'react';

var IdeaShowcase = React.createClass({
  render: function(){
    var {ideaText} = this.props;
    return (
      <div className="idea-showcase-container">
        {ideaText}
      </div>
    );
  }
});

export default IdeaShowcase;
