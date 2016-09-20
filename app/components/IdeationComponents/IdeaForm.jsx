import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export var IdeaForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var idea = this.refs.idea.value;
    dispatch(actions.addIdea(idea));
    this.refs.idea.value = '';
    this.refs.idea.focus();
  },
  render: function(){
    return(
      <div className="ideaform-container">
        <form onSubmit={this.handleSubmit}>
          <input className="ideaform-input" type="text" ref="idea" required placeholder="Feed me an idea"/>
          <button className="button hollow">+</button>
        </form>
      </div>
    );
  }
});

export default connect()(IdeaForm);
