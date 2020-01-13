import React from 'react';
import styled from 'styled-components';

// components
import Todo from './Todo';

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const TodoList = props => {
    return (
        <ListContainer>
            {
                props.items.map((item) => { // map over our items and return the single todo item
                    return (
                        <Todo
                            key={item.id}
                            item={item}
                            completeTodo={props.completeTodo}
                            cursorChange={props.cursorChange} />
                    )
                })
            }
        </ListContainer>
    )
}

export default TodoList;