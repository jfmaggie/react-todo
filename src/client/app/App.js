import React from 'react';
import FilterLink from './containers/FilterLink';

const filterTodo = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return (todos.filter( (todo) => !todo.completed ));
    case "SHOW_COMPLETED":
      return (todos.filter( (todo) => todo.completed ));
  }
};

const App = ({ todos, onAddTodoClick, nextTodoId, toggleTodo, visibilityFilter }) => {
  let input;
  const filteredTodo = filterTodo(todos, visibilityFilter);

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
        {filteredTodo.map((todo, index) =>
          <li key={index} onClick={() => {
            toggleTodo(todo.id)
          }}>
            <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</span>
          </li>
        )}
      </ul>
      <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
          ALL
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
          ACTIVE
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
          COMPLETED
        </FilterLink>
      </p>
    </div>
  );
};

export default App;
