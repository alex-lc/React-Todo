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
  };

  completeTodo = event => {
    if (event.target.style.textDecoration !== 'line-through') {
      event.target.style.textDecoration = 'line-through';
    }
    else {
      event.target.style.textDecoration = 'none';
    }

    let done = this.state.items.filter((item) => item.task === event.target.textContent);
    done[0].completed !== true ? done[0].completed = true : done[0].completed = false;
    console.log(done[0].task, done[0].completed);
  }

  cursorChange = event => {
    event.target.style.cursor = 'pointer';
  }

  removeCompleted = event => {
    let removed = this.state.items.filter((item) => event.target.completed === true);
    console.log(removed);
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          removeCompleted={this.removeCompleted} />
        <TodoList
          items={this.state.items}
          completeTodo={this.completeTodo}
          cursorChange={this.cursorChange} />
      </div>
    );
  }
}


export default App;
