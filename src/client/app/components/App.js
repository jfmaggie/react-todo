import React from 'react';
import Footer from './Footer';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodoContainer from '../containers/AddTodoContainer';

const App = () => (
  <div>
    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </div>
);

export default App;
