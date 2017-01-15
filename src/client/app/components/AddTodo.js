import React from 'react';

const AddTodo = ({ onAddTodoClick, nextTodoId }) => {
  let input;

  return (
    <div>
      <input type="text" ref={node => {
        input = node
      }} />
      <button onClick={() => {
        onAddTodoClick(input.value, nextTodoId)
        input.value = ''
      }} >Add Todo</button>
    </div>
  );
};

export default AddTodo;
