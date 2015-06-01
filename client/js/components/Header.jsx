import React from 'react';
import TodoTextInput from 'client/components/TodoTextInput';

const Header = React.createClass({
  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  },

  _onSave(text) {
    const actions = this.getActions('todo');

    if (text.trim()){
      actions.create(text);
    }
  }
});

export default Header;
