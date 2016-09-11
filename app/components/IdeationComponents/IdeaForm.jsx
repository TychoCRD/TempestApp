import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

var IdeaForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var idea = this.refs.idea.value;
    dispatch(actions.addIdea(idea));
    this.refs.idea.value = '';
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea ref="idea" required>
          </textarea>
          <button className="button hollow">+</button>
        </form>
      </div>
    );
  }
});

export default connect()(IdeaForm);
