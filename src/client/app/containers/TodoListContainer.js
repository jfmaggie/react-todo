import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

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
      dispatch({
        type: "TOGGLE_TODO",
        id: id
      });
    }
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
