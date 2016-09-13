import React from 'react';

var CountdownSet = React.createClass({
  handleTime: function(){
    var {count} = this.props;
    var seconds = count % 60;
    var minutes = Math.floor(count/60);

    if(seconds === 0){
      seconds = '00';
    }

    return minutes + ':' + seconds;
  },
  render: function(){
    var {changeTime} = this.props;
    var time = this.handleTime();
    return (
      <div>
        <button className="button" onClick={()=>{changeTime('decrease')}}>-</button>
        <div className="clock">
          <span className="clock-text">{time}</span>
        </div>
        <button className="button" onClick={()=>{changeTime('increase')}}>+</button>
      </div>
    );
  }
});


export default CountdownSet;
