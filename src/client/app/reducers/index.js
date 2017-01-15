import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: action.id
        }
      ];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const nextTodoId = (state = 1, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state + 1;
    default:
      return state;
  }
};

const reducers = combineReducers({ todos: todos, nextTodoId: nextTodoId });

export default reducers;