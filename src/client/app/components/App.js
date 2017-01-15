import React from 'react';
import Footer from './Footer';
import TodoListContainer from '../containers/TodoListContainer';

const App = ({ onAddTodoClick, nextTodoId, visibilityFilter }) => {
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
      <TodoListContainer />
      <Footer />
    </div>
  );
};

export default App;
