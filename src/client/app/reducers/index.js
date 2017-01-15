import { combineReducers } from 'redux';
import todos from './todos';
import nextTodoId from './nextTodoId';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  todos: todos,
  nextTodoId: nextTodoId,
  visibilityFilter: visibilityFilter
});

export default reducers;
