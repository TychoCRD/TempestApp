import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var SortSpread = React.createClasee({
  render: function(){
    return (
      <div>
        SortSpread
      </div>
    );
  }
});

export default connect()(SortSpread);
