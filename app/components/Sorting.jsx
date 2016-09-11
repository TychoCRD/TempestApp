import React from 'react';
import {connect} from 'react-redux';

import IdeasDisplay from 'IdeasDisplay';
import IdeaSorter from 'IdeaSorter';
import SortSpread from 'SortSpread';

export var Sorting = React.createClass({
  render: function(){
    return (
      <div>
        <div>
          <IdeasDisplay/>
        </div>
        <IdeaSorter/>
        <SortSpread/>
      </div>
    );
  }
});


export default connect()(Sorting);
