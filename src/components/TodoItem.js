import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";


function TodoItem({ todoItem, toggleCompleteTodo, removeTodoItem }) {

    function handleCheckboxClick() {
        toggleCompleteTodo(todoItem.id);
    }

    function handleRemoveClick() {
        removeTodoItem(todoItem.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todoItem.completed} onClick={handleCheckboxClick} />
            <Typography
                variant="body1"
                style={{ textDecoration: todoItem.completed ? "line-through" : null }}>
                {todoItem.task}
            </Typography>
            <IconButton onClick={handleRemoveClick} >
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default TodoItem;