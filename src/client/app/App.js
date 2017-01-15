import React from 'react';


const App = ({ todos, onAddTodoClick, nextTodoId, toggleTodo }) => {
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
      <ul>
        {todos.map((todo, index) =>
          <li key={index} onClick={() => {
            toggleTodo(todo.id)
          }}>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
