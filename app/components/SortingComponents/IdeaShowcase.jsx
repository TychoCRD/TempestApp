import React from 'react';

export var SortList = React.createClass({
  render: function(){
    var {ideaText} = this.props;
    return (
      <div>
        {ideaText}
      </div>
    );
  }
});

export default SortList;
