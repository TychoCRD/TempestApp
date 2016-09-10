import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var Ideas = React.createClass({
  render: function(){
    return(
      <div>Ideas</div>
    );
  }
});

export default connect()(Ideas);
