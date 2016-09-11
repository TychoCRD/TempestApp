import React from 'react';
import {connect} from 'react-redux';

import Ideas from 'Ideas';
import IdeaSorter from 'IdeaSorter';
import SortSpread from 'SortSpread';

export var Sorting = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <Ideas/>
        </div>
        <IdeaSorter/>
        <SortSpread/>
      </div>
    );
  }
});


export default connect()(Sorting);
