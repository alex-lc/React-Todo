import React from 'react';

const Todo = props => {
    return (
        <div>
            <p onClick={props.completeTodo} onMouseEnter={props.cursorChange}>{props.item.task}</p>
        </div>
    )
}

export default Todo;