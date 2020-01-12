import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    input[type=text] {
        display: block;
    }

    button {
        display: block;
    }
`;

const TodoForm = props => {
    return (
        <Form onSubmit={props.onSubmit}>
            <input type="text" name="todoItem" value={props.task} onChange={props.handleChange} onSubmit={props.clearField} autoComplete="off" />
            <button type="submit">Add Todo</button>
            <button onClick={props.removeCompleted}>Clear Completed</button>
        </Form>
    )
}


export default TodoForm;