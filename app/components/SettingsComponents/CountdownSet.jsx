import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var CountdownSet = React.createClass({
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
    var {count, dispatch} = this.props;
    var time = this.handleTime();
    return (
      <div>
        <button className="button" onClick={()=>{
            if(count > 30){
            dispatch(actions.decreaseCount());
            }
          }}>-</button>
        <div className="clock">
          <span className="clock-text">{time}</span>
        </div>
        <button className="button" onClick={()=>{
            if(count < 600){
              dispatch(actions.increaseCount());
            }
            }}>+</button>
      </div>
    );
  }
});


export default connect((state)=>{
  return {
    count: state.count
  };
})(CountdownSet);
