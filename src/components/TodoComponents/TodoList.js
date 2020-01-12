// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

// components
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
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
        </div>
    )
}

export default TodoList;