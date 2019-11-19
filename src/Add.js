import React from 'react';
import './common.css';
import add from './plus.svg';

const Add = () => {
  var addItem = () => {
    //TODO: add
  };
  return (
    <div className="addButton" onClick={addItem}>
      <img src={add} alt="add" className="add" />
    </div>
  );
}

export default Add;