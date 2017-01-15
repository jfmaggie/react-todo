import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
  return {
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
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
