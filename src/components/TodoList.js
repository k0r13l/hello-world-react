import React from 'react';
import { List } from '@material-ui/core';
import TodoItem from './TodoItem';

function TodoList({ todoList, toggleCompleteTodo, removeTodoItem }) {
    return (
        <List>
            { todoList.map(item => (
                <TodoItem 
                    key={ item.id } 
                    todoItem={ item } 
                    toggleCompleteTodo={ toggleCompleteTodo }
                    removeTodoItem={ removeTodoItem } 
                />
            )) }
        </List>
    );
}

export default TodoList;