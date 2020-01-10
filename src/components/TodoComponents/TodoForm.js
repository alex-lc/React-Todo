import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" name="todoItem" onChange={props.handleChange} />
            <button type="submit">Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}


export default TodoForm;