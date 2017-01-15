import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => {
  return {
    nextTodoId: state.nextTodoId
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

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
