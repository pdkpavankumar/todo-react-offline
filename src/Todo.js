import React from 'react';
import './common.css';
import del from './delete.svg';
import success from './success.svg';
import verify from './verified.svg';

class Todo extends React.Component {
  render() {
    var done = true;
    var removeItem = () => {
      var remove = window.confirm('Are you sure want to delete');
      if (remove) {
        //TODO remove
      }
    };

    var toggleItem = () => {
      done = !done;
    };

    return (
      <div className="task">
        <div className="input" contentEditable="true">
        </div>
        <div className="delete" onClick={removeItem}>
          <img src={del} alt="delete" className="del" />
        </div>
        <div className="success" onClick={toggleItem}>
          <img src={done ? success : verify} alt="checked" className="successicon" />
        </div>
      </div>
    );
  }
}

export default Todo;