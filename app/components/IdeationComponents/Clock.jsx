import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var Clock = React.createClass({
  componentDidMount: function(){
    var {dispatch} = this.props;
    // dispatch(actions.startCountdown());
    this.timer = setInterval(()=>{
      dispatch(actions.countDown());
    }, 1000);
  },
  componentDidUpdate: function(){
    var {count, dispatch} = this.props;
    if(count === 0){
      dispatch(actions.updateAppStage('sorting'))
    }
  },
  componentWillUnmount: function(){
    var {dispatch} = this.props;
    clearInterval(this.timer);
    this.timer = undefined;
    // dispatch(actions.stopCountdown());
  },
  count: function(){
    var {count} = this.props;
    return count.toString();
  },
  render: function(){
    return(
      <div><span>{this.count()}</span></div>
    );
  }
});

export default connect((state)=>{
  return {
    count: state.count,
    countdownStatus: state.countdownStatus
  };
})(Clock);
