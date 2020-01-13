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
    line-height: 2.4rem;

    p {
      margin: 1rem 0;
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
      items: []
    };
  }

  completeTodo = (id) => {
    let newItems = this.state.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      else {
        return item;
      }
    });

    this.setState({ items: newItems });

  }

  addTodo = itemName => {
    const newTodo = {
      task: itemName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      items: [...this.state.items, newTodo]
    })
  }

  // just adding some additional styling for when an item is hovered over
  cursorChange = event => {
    event.target.style.cursor = 'pointer';
  }

  removeCompleted = (event) => {
    event.preventDefault();
    let incomplete = this.state.items.filter((item) => item.completed !== true);
    // console.log(incomplete);
    this.setState({ items: incomplete });
    console.log(this.state.items);
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
            // handleChange={this.handleChange}
            // onSubmit={this.onSubmit}
            removeCompleted={this.removeCompleted}
            task={this.state.activeTodo}
            items={this.state.items}
            addTodo={this.addTodo} />
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
