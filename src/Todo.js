import React from 'react';
import './common.css';
import del from './delete.svg';
import success from './success.svg';
import verify from './verified.svg';

class Todo extends React.Component {
  constructor() {
    super();
    this.domnode = React.createRef();
  }
  shouldComponentUpdate(nextProps){
    return nextProps.item.text !== this.domnode.current.innerHTML || this.props.item.done !== nextProps.item.done;
  }

  render() {
    return (
      <div className="task">
        <div className="input" contentEditable="true" ref={this.domnode} dangerouslySetInnerHTML={{__html: this.props.item.text}} onInput={(event) => this.props.handleChange(this.props.item.id, event.target.innerHTML)}>
        </div>
        <div className="delete" onClick={() => this.props.removeItem(this.props.item.id)}>
          <img src={del} alt="delete" className="del" />
        </div>
        <div className="success" onClick={() => this.props.toggleItem(this.props.item.id)}>
          <img src={this.props.item.done ? success : verify} alt="checked" className="successicon" />
        </div>
      </div>
    );
  }
}

export default Todo;