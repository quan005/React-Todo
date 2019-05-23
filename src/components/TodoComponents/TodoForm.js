import React from "react";

const ToDoForm = props => {
    return (
        <form name="todoAddForm" onSubmit={props.addListItemHandler}>
            <input
                type="text"
                value={props.task}
                placeholder="...Add Todo Item"
                name="task"
                onChange={props.inputChangeHandler}
            />
            <button onClick={props.addListItemHandler}>Add Todo</button>
            <button onClick={props.clearItemHandler}>Clear Completed</button>
        </form>
    );
}

export default ToDoForm;