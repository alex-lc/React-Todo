import React from 'react';

// components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      activeTodo: '',
      completedTodo: ''
    };
  }

  handleChange = event => {
    this.setState({ activeTodo: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, {
        task: this.state.activeTodo,
        id: Date.now(),
        completed: false
      }]
    });
    this.setState({ activeTodo: '' });
  };

  completeTodo = event => {
    if (event.target.style.textDecoration !== 'line-through') {
      event.target.style.textDecoration = 'line-through';
    }
    else {
      event.target.style.textDecoration = 'none';
    }
  };

  cursorChange = event => {
    event.target.style.cursor = 'pointer';
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleChange={this.handleChange} onSubmit={this.onSubmit} />
        <TodoList items={this.state.items} completeTodo={this.completeTodo} cursorChange={this.cursorChange} />
      </div>
    );
  }
}


export default App;
