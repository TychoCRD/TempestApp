import React from 'react';

var IdeaShowcase = React.createClass({
  render: function(){
    var {ideaText} = this.props;
    return (
      <div>
        {ideaText}
      </div>
    );
  }
});

export default IdeaShowcase;
