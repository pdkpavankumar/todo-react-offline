import React from 'react';
import './common.css';
import add from './plus.svg';

const Add = () => (
  <div className="addButton">
    <img src={add} alt="add" className="add"/>
  </div>
);

export default Add;