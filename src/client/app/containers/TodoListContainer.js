import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { toggleTodo } from '../actions';

const filterTodo = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return (todos.filter( (todo) => !todo.completed ));
    case "SHOW_COMPLETED":
      return (todos.filter( (todo) => todo.completed ));
  }
};

const mapStateToProps = (state) => {
  return {
    filteredTodo: filterTodo(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
