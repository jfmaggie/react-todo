import React from 'react';
import Todo from './Todo';

const TodoList = ({ filteredTodo, toggleTodo }) => (
  <ul>
    {filteredTodo.map((todo, index) =>
      <Todo key={index} toggleTodo={toggleTodo} id={todo.id} text={todo.text} completed={todo.completed} />
    )}
  </ul>
);

export default TodoList;
