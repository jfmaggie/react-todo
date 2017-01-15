import React from 'react';
import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    nextTodoId: state.nextTodoId,
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (text, id) => {
      dispatch({
        type: "ADD_TODO",
        text: text,
        id: id
      });
    },
    toggleTodo: (id) => {
      dispatch({
        type: "TOGGLE_TODO",
        id: id
      });
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
