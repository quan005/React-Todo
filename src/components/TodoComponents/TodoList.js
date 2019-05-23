import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="list-container">
            <ul>
                {props.listItems.map( activity => {
                    return <Todo completedItem={props.completedItem} activity={activity} />
                })}
            </ul>
        </div>
    )
};

export default TodoList;