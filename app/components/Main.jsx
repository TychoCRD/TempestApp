import React from 'react';
import {connect} from 'react-redux';

import Settings from 'Settings';
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
      <div>
        <h1>Main</h1>
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
