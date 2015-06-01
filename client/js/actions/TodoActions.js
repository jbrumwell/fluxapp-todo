import fluxapp from 'fluxapp';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

fluxapp.registerActions('todo', {
  create(text) {

  },

  update(id, text) {

  },

  toggleComplete(todo) {

  },

  toggleCompleteAll() {

  },

  destroy(id) {

  },

  destroyCompleted() {

  },
});


export default TodoActions;
