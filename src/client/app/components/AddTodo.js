import React from 'react';

const AddTodo = ({ onAddTodoClick, nextTodoId }) => {
  let input;

  return (
    <div className="uk-container-center">
      <input className="new-todo" placeholder="What needs to be done?" type="text" ref={node => {
        input = node
      }} />
      <button className="uk-button add-todo" onClick={() => {
        onAddTodoClick(input.value, nextTodoId)
        input.value = ''
      }} > + </button>
    </div>
  );
};

export default AddTodo;
