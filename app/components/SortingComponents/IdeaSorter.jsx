import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var IdeaSorter = React.createClass({
  render: function(){
    return (
      <div>
        IdeaSorter
      </div>
    );
  }
});

export default connect()(IdeaSorter);
