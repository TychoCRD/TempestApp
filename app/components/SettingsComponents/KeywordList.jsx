import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var KeywordList = React.createClass({
  render: function(){
    return (
      <div>
        You haven't set any keywords yet.
      </div>
    );
  }
});


export default connect()(KeywordList);
