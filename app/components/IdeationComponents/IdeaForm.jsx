import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var IdeaForm = React.createClass({
  render: function(){
    return(
      <div>IdeaForm</div>
    );
  }
});

export default connect()(IdeaForm);
