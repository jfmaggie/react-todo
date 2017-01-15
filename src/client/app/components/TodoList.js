import React from 'react';

const TodoList = ({ filteredTodo, toggleTodo }) => (
  <ul>
    {filteredTodo.map((todo, index) =>
      <li key={index} onClick={() => {
        toggleTodo(todo.id)
      }}>
        <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
      </li>
    )}
  </ul>
);

export default TodoList;
