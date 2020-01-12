import React from 'react';
import styled from 'styled-components';

// components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
  }
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: [],
      activeTodo: '',
    };
  }

  // set our current activeTodo state to the value of our text input
  handleChange = event => {
    this.setState({ activeTodo: event.target.value });
  };

  // when the form is submitted, set the state of our items array to any current items, plus the newly created item
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, {
        task: this.state.activeTodo,
        id: Date.now(),
        completed: false,
      }]
    });
    this.setState({ activeTodo: '' }); // reset our activeTodo state to clear the text input on submit
  };

  // toggle completion of our todo items
  completeTodo = (id) => {

    // Didn't work, but keeping for reference:
    // if (event.target.style.textDecoration !== 'line-through') {
    //   event.target.style.textDecoration = 'line-through';
    // }
    // else {
    //   event.target.style.textDecoration = 'none';
    // }

    // let done = this.state.items.filter((item) => item.task === event.target.textContent);
    // done[0].completed !== true ? done[0].completed = true : done[0].completed = false;
    // console.log(done[0].task, done[0].completed);

    // create a new array of items that match the current id of the item that was clicked on
    // set the completed value to whatver it is not
    let items = this.state.items.slice();
    items = items.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
        return item;
      }
      else {
        return item;
      }
    })

    this.setState({ items });

  }

  // just adding some additional styling for when an item is hovered over
  cursorChange = event => {
    event.target.style.cursor = 'pointer';
  }

  removeCompleted = event => {
    let notCompleted = this.state.items.filter((item) => item.completed === false);
    this.setState({ items: notCompleted });
  }

  render() {
    return (
      <Container>
        <div>
          <h2>todoer.</h2>
          <TodoForm
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            removeCompleted={this.removeCompleted}
            task={this.state.activeTodo}
            items={this.state.items} />
          <TodoList
            items={this.state.items}
            completeTodo={this.completeTodo}
            cursorChange={this.cursorChange} />
        </div>
      </Container>
    );
  }
}


export default App;
