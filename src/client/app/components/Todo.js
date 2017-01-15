import React from 'react';

const Todo = ({ toggleTodo, id, text, completed}) => (
  <li onClick={() => {
    toggleTodo(id)
  }}>
    <span style={{textDecoration: completed ? "line-through" : "none"}}>{text}</span>
  </li>
);

export default Todo;
