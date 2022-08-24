import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import {v4 as uuid} from 'uuid'

function TodoForm({ addTodoItem }) {
    const [todoItem, setTodoItem] = useState({
        id: '',
        task: '',           // Descripción de la tarea
        completed: false    // Si esta completado o no
    });

    // Manejo de eventos
    // Función para actualizar la propiedad task
    function handleTaskChange(e) {
        setTodoItem({
            ...todoItem,
            task: e.target.value  // El valor del input
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todoItem.task.trim() !== '') {
            addTodoItem({ ...todoItem, id: uuid() });

            // Limpia el input
            setTodoItem({...todoItem, task: ''});
        }
    }

    return (
        <form className="todo-form" onSubmit={ handleSubmit }>
            <TextField
                label="Nueva tarea"
                name="task" 
                type="text" 
                value={ todoItem.task } 
                onChange={ handleTaskChange } />
            <Button style={{ backgroundColor: "#D16EF5" }} type="submit">Añadir</Button>
        </form>
    );
}

export default TodoForm;