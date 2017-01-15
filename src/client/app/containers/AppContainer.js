import React from 'react';
import { connect } from 'react-redux';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (text) => {
      dispatch({
        type: "ADD_TODO",
        text: text
      });
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
