import React from 'react';
import {connect} from 'react-redux';

import Settings from 'Settings';
import Loading from 'Loading';
import Ideation from 'Ideation';
import Sorting from 'Sorting';
import Display from 'Display';

var Main = React.createClass({
  renderUI: function(){
    // appState
    var {appStage} = this.props;
    switch(appStage){
      case 'settings':
        return <Settings/>;
      case 'loading':
        return <Loading/>;
      case 'ideation':
        return <Ideation/>;
      case 'sorting':
        return <Sorting/>;
      case 'display':
        return <Display/>;
    }
  },
  render: function(){
    return (
      <div className="main-container">
        {this.renderUI()}
      </div>
    );
  }
});

export default connect((state)=>{
  return {
    appStage: state.appStage
  };
})(Main);
