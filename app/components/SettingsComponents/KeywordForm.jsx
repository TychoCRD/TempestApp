import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var KeywordForm = React.createClass({
  render: function(){
    return (
      <div>
        KeywordForm
      </div>
    );
  }
});


export default connect()(KeywordForm);
