import React from 'react';
import TodoTextInput from './TodoTextInput';
import cx from 'classnames';

const TodoItem = React.createClass({
  propTypes: {
   todo: ReactPropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isEditing: false
    };
  },
  
  render() {
    const todo = this.props.todo;
    let input;

    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    return (
      <li
        className={cx({
          'completed': todo.complete,
          'editing': this.state.isEditing
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  _onToggleComplete() {
    const actions = this.getActions('todo');

    actions.toggleComplete(this.props.todo);
  },

  _onDoubleClick() {
    this.setState({isEditing: true});
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param  {string} text
   */
  _onSave(text) {
    const actions = this.getActions('todo');

    actions.updateText(this.props.todo.id, text);

    this.setState({isEditing: false});
  },

  _onDestroyClick() {
    const actions = this.getActions('todo');
    actions.destroy(this.props.todo.id);
  }
});

export default TodoItem;
