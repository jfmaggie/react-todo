import React from 'react';


const App = ({ todos, onAddTodoClick, nextTodoId }) => {
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
          <li key={index}>{todo.text}</li>
        )}
      </ul>
    </div>
  );
};

export default App;
