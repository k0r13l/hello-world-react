import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = 'reactjs.todoList';

function App() {

  /**
   * state = vector de estados
   * setState = función para atualizar el estado
   */
  const [todoItems, setTodoItem] = useState([]);

  // Se usa para cargar los datos de localStorage en caso de que existan
  useEffect(() => {
    const storageTodoItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodoItems) {
      setTodoItem(storageTodoItems);
    }
  }, []);

  // Guarda el vector en almacenamiento local
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
  }, [todoItems]);

  // Añade un nuevo elemento al vector de items
  function addTodoItem(todoItem) {
    /**
     * Asigna un nuevo vector de items con el nuevo elemento al inicio,
     * y mueve los existentes una posición hacia abajo
     */
    setTodoItem([todoItem, ...todoItems]);
  }

  function toggleCompleteTodo(id) {
    setTodoItem(
      todoItems.map(todoItem => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            completed: !todoItem.completed
          };
        }
        return todoItem;
      })
    );
  }

  function removeTodoItem(id) {
    /**
     * Crea un nuevo vector de items sin el elemento con el id indicado
     */
    setTodoItem(todoItems.filter(todoItem => todoItem.id !== id));
  }

  /*
  * Pasa una función como un prop a un componente
  * <TodoForm addTodoItem={ addTodoItem } />
  */
  return (
    <div className="App">
      <Typography variant="h3" style={{ padding: 20 }} >
        Lista de tareas
      </Typography>
      <TodoForm addTodoItem={addTodoItem} />
      <TodoList
        todoList={todoItems}
        toggleCompleteTodo={toggleCompleteTodo}
        removeTodoItem={removeTodoItem}
      />
    </div>
  );
}

export default App;
