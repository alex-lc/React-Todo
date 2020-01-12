import React from 'react';

const Todo = props => {
    return (
        <div>
            <div
                // if the item's completed property is true, then strikethrough it, otherwise do nothing
                style={props.item.completed ? { textDecoration: 'line-through' } : null}
                onClick={() => props.completeTodo(props.item.id)} // invoke the completeTodo function and pass it our current todo item id
                onMouseEnter={props.cursorChange}>
                {props.item.task}
            </div>
        </div>
    )
}

export default Todo;