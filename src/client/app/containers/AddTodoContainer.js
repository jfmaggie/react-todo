import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions';

const mapStateToProps = (state) => {
  return {
    nextTodoId: state.nextTodoId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodoClick: (text, id) => {
      dispatch(addTodo(text, id));
    }
  };
};

const AddTodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
