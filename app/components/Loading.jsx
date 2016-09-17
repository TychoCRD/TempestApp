import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';



export var Loading = React.createClass({
  renderStatus: function(){
    var {isLoading, dispatch} = this.props;
    if(isLoading){
      return (
        <p>Loading new Tempest...</p>
      );
    } else {
      setTimeout(()=>{
        dispatch(actions.updateAppStage('ideation'));
      }, 2000);
      return (
        <p>Get ready!</p>
      );
    }
  },
  render: function(){
    return (
      <div className="xy-center">
        {this.renderStatus()}
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Loading);
