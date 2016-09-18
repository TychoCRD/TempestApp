import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';



export var Loading = React.createClass({
  renderStatus: function(){
    var {isLoading, dispatch} = this.props;
    if(isLoading){
      return (
        <h2>Brewing new Tempest...</h2>
      );
    } else {
      setTimeout(()=>{
        dispatch(actions.updateAppStage('ideation'));
      }, 1500);
      return (
        <h2>Get ready!</h2>
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
