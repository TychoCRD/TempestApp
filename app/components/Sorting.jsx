import React from 'react';
import {connect} from 'react-redux';

import IdeasDisplay from 'IdeasDisplay';
import IdeaSorter from 'IdeaSorter';
import SortSpread from 'SortSpread';

export var Sorting = React.createClass({
  filterIdeas: function(){
    var {ideas} = this.props;
    return ideas.filter((idea) => !idea.sorted);
  },
  render: function(){
    return (
      <div>
        <div>
          <IdeasDisplay filteredIdeas={this.filterIdeas()}/>
        </div>
        <IdeaSorter/>
        <SortSpread/>
      </div>
    );
  }
});


export default connect((state)=>{
  return state;
})(Sorting);
