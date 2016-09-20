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
      <div className="countdownset-container">
        <div className="clock-btn" onClick={()=>{changeTime('decrease')}}>-</div>
        <div className="countdownset-clock">
          <span className="countdownset-clock-text">{time}</span>
        </div>
        <div className="clock-btn" onClick={()=>{changeTime('increase')}}>+</div>
      </div>
    );
  }
});


export default CountdownSet;
