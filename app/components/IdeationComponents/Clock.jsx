import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var Clock = React.createClass({
  handleCountdown: function(){
    var {count, countdownStatus, dispatch} = this.props;
    if(countdownStatus === 'started' && count > 1){
      // setInterval to dispatch count down )
      // return count;
    } else {
      // clearInterval
      // dispatch(actions.stopCountdown());
      // dispatch(actions.updateAppStage('sorting'));
    }
  },
  componentDidMount: function(){
    var {dispatch} = this.props;
    dispatch(actions.startCountdown());
  },
  render: function(){
    return(
      <div>{this.handleCountdown()}</div>
    );
  }
});

export default connect((state)=>{
  return {
    count: state.count
  };
})(Clock);
