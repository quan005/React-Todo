import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <li 
            className={`${props.activity.completed === true ? 'completed' : ""} list-item`} 
            completed={props.activity.completed} 
            onClick={() => {
                props.completedItem(props.activity.id)
                }
            }
        >
        {props.activity.task}
        </li>
    )
}

export default Todo;