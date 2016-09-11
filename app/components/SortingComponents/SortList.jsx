import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var SortList = React.createClasee({
  render: function(){
    return (
      <div>
        SortList
      </div>
    );
  }
});

export default connect()(SortList);
