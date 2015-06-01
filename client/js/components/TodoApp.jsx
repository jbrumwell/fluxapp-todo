import React from 'react';

import Footer from './Footer';
import Header from './Header';
import MainSection from './MainSection';
import TodoStore from '../stores/TodoStore';

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

const TodoApp = React.createClass({
  mixins: [
    fluxapp.mixins.component
  ],

  flux: {
    stores: {
      onTodosUpdate: 'todo',
    }
  },

  getInitialState: function() {
    return this.stateFromStores();
  },

  stateFromStores() {
    const store = this.getStore('todo');
    const all = store.getAll();
    const completed = store.getCompleted();

    return {
      todos: all,
      completed: completed,
    };
  },

  onTodosUpdate() {
    this.setState(this.stateFromStores());
  },

  render() {
  	return (
      <div>
        <Header />
        <MainSection
          todos={this.state.all}
          completed={this.state.completed}
        />
        <Footer total={this.state.all.length}
                completed={this.state.completed.length} />
      </div>
  	);
  }
});

module.exports = TodoApp;
