import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5rem;

    input[type=text] {
        display: block;
        background: #cbe9c8;
        width: 20rem;
        border: none;
        border-radius: 0.3rem;
        padding: 1rem;
        font-weight: 300;
        font-size: 1.2rem;
    }

    button {
        background: #33314a;
        border: 1px solid #2a283d;
        border-radius: 0.3rem;
        padding: 1rem;
        font-weight: 300;
        color: #fafafa;
        font-size: 1.2rem;
        transition: all 200ms;
        margin: 0 1.7rem;

        &:hover {
            transition: opacity 200ms;
            opacity: 0.95;
            cursor: pointer;
        }
    }

    .controls {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        margin-top: 1rem;
    }
`;

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }
    }

    handleChanges = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        document.getElementById('todoForm').reset();
    }

    render() {
        return (
            <Form id="todoForm" onSubmit={this.handleSubmit}>
                <input type="text" name="todoItem" onChange={this.handleChanges} autoComplete="off" />
                <div className="controls">
                    <button type="submit">Add Todo</button>
                    <button onClick={this.props.removeCompleted}>Clear Completed</button>
                </div>
            </Form>
        );
    }
}

export default TodoForm;