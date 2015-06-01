import fluxapp from 'fluxapp';
import _ from 'lodash';

fluxapp.registerStore('todo', {
  actions: {
    todo: 'todo',
  },

  getInitialState() {
    return {
      todos: {}
    };
  },

  onTodoCreate(text) {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const state = this.getMutableState();

    state.todos[id] = {
      id: id,
      complete: false,
      text: text
    };

    this.setState(state);
  },

  onTodoUpdate(id, updated) {
    const state = this.getMutableState();
    const todo = state.todos[id];

    if (todo) {
       state.todos[id] = _.merge(todo, updated);
    }

    this.setState(state);
  },

  onTodoUpdateAll(updated) {
    const state = this.getMutableState();

    _.each(state.todos, (todo) => {
      state.todos[id] = _.merge(todo, updated);
    })

    this.setState(state);
  },

  onTodoDestroy(id) {
    const state = this.getMutableState();

    delete state.todos[id];

    this.setState(state);
  },

  onTodoDestroyCompleted() {
    const state = this.getMutableState();

    state.todos = _.filter(state.todos, (todo) => {
      return todo.complete;
    });

    this.setState(state);
  },

  areAllComplete() {
    const todos = this.state.todos;
    const hasIncomplete = todos.some((todo) {
      return ! todo.complete;
    });

    return hasIncomplete === false;
  },

  getCompleted() {
    const state = this.getMutableState();

    state.todos = _.filter(state.todos, (todo) => {
      return todo.complete === false;
    });

    return _.values(state.todos);
  },

  getAll() {
    return _.values(this.state.todos);
  }
});

export default TodoStore;
