import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.onSubmit}>
            <input type="text" name="todoItem" value={props.task} onChange={props.handleChange} onSubmit={props.clearField} autoComplete="off" />
            <button type="submit">Add Todo</button>
            <button onClick={props.removeCompleted}>Clear Completed</button>
        </form>
    )
}


export default TodoForm;