import React from 'react';
import TodoItem from './TodoItem';

const MainSection = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
  },

  render() {
    const actions = this.getActions('todo');
    const todos = this.props.todos.map((todo, idx) => {
      return (
        <TodoItem key={idx} todo={todo} />
      );
    });

    return todos.length === 0 ? null : (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={actions.toggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">
          Mark all as complete
        </label>
        <ul id="todo-list">
          {todos}
        </ul>
      </section>
    );
  }
});

export default MainSection;
