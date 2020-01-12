import React from 'react';
import styled from 'styled-components';

// components
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;

  .header {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #33314a;
    border-bottom: 1px solid #2a283d;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-left: 15%;
      color: #fafafa;
      margin-bottom: 0.25rem;
    }

    p.tagline {
      font-size: 1.2rem;
      font-weight: 300;
      margin-left: 15%;
      color: #fafafa;
      margin-top: 0.25rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .instructions {
    margin-top: 5%;
    text-align: center;
    font-size: 1.4rem;

    p {
      margin: 0.5rem 0;
    }
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
        <div className="header">
          <h2>todoer.</h2>
          <p className="tagline">manage your life.</p>
        </div>
        <div className="instructions">
          <p>Simply enter in a task you need to complete, and then click on it to mark it as complete.</p>
          <p>You can also clear your completed todos using the 'Clear Completed' button.</p>
        </div>
        <div>
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
