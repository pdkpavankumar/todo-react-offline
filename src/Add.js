import React from 'react';
import './common.css';
import add from './plus.svg';

class Add extends React.Component {
  render() {
    return (
      <div className="addButton" onClick={() => this.props.add()}>
        <img src={add} alt="add" className="add" />
      </div>
    );
  }
}

export default Add;