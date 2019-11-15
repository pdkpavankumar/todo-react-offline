import React from 'react';
import './common.css';
import todo from './todo.svg';
import Todo from './Todo';
import Add from './Add';

function App() {
  return (
    <div className="background">
      <div className="header">
        <img src={todo} className="logo" alt="todo"></img>
        <span className="title">TODO Offline App</span>
      </div>
      <div className="content paper">
        <Todo />
      </div>
      <Add />
      <div className="footer">
        TODO application offline....
      </div>
    </div>
  );
}

export default App;
