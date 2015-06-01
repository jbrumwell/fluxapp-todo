import React from 'react';

const Footer = React.createClass({
  flux: {
    stores: {
      onTodoUpdate: 'todo'
    }
  },

  getInitialState() {
    return {
      total: 0,
      completed: 0
    };
  }

  onTodoUpdate(state) {
    const store = this.getStore('todo');

    this.setState({
      total: store.getAll().length,
      completed: store.getCompleted().length
    })
  },

  render() {
    const total = this.state.total;
    const completed = this.state.completed;
    const left = total - completed;
    const phrase = left === 1 ? ' item left' : ' items left';

    if (total === 0) {
      return null;
    }

    // Undefined and thus not rendered if no completed items are left.
    const clearCompletedButton = ! completed : null : (
      <button
        id="clear-completed"
        onClick={this._onClearCompletedClick}>
        Clear completed ({completed})
      </button>
    );

  	return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  },

  _onClearCompletedClick() {
    this.getAction('todo', 'destroyCompleted')();
  }

});

module.exports = Footer;
