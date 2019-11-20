import React from 'react';
import './common.css';
import todo from './todo.svg';
import Todo from './Todo';
import Add from './Add';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos') || JSON.stringify([]))
    };
  }

  add = () => {
    this.setState({
      todos: [{ id: new Date().getTime(), text: '', done: false }, ...this.state.todos]
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    });
  }

  toggleItem = (id) => {
    this.setState((prevProps) => {
      return {
        todos: prevProps.todos.map((item) => {
          if (item.id === id) {
            return { ...item, done: !item.done };
          }
          return item;
        })
      };
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    })
  }

  removeItem = (id) => {
    this.setState((prevProps) => {
      return {
        todos: prevProps.todos.filter((item) => item.id !== id)
      };
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    })
  }

  handleChange = (id, text = '') => {
    this.setState((prevProps) => {
      return {
        todos: prevProps.todos.map((item) => {
          if (item.id === id) {
            return { ...item, text: text};
          }
          return item;
        })
      };
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    })
  }

  render() {
    return (
      <div className="background">
        <div className="header">
          <img src={todo} className="logo" alt="todo"></img>
          <span className="title">TODO Offline App</span>
        </div>
        {
          this.state.todos.length === 0 ? (<h3>No Items Enjoy your day!</h3>) : this.state.todos.map((item) => {
            return (
              <div className="content paper" key={item.id}>
                <Todo item={item} toggleItem={this.toggleItem} removeItem={this.removeItem} handleChange={this.handleChange} />
              </div>
            );
          })

        }
        <Add add={this.add} />
        <div className="footer">
          TODO application offline....
        </div>
      </div>
    );
  }
}

export default App;
