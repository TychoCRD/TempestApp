import React from 'react';

var Clock = React.createClass({
  count: function(){
    var {count} = this.props;
    return count.toString();
  },
  render: function(){
    return(
      <div className="ideation-clock">
        <span>{this.count()}</span>
      </div>
    );
  }
});

export default Clock;
