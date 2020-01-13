import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;
    font-weight: 300;
    border-radius: 0.3rem;
    background: #cbe9c8;
    margin: 1rem 0;
    transition: all 300ms;

    &:hover {
        transition: background 300ms;
        background: #add1ab;
    }
`;

const Todo = props => {
    return (
        <TodoContainer
            // if the item's completed property is true, then strikethrough it, otherwise do nothing
            style={props.item.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.completeTodo(props.item.id)} // invoke the completeTodo function and pass it our current todo item id
            onMouseEnter={props.cursorChange}>
            <p>{props.item.task}</p>
        </TodoContainer>
    )
}

export default Todo;