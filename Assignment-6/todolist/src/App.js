import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import { Addtodo } from './components/Addtodo';

function App() {

  const initialTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos]);


  const deletetodo = (todo) => {
    console.log('Deleted todo', todo);
    setTodos(todos.filter((element) => {
      return element !== todo;
    }));
  }

  const addtodo = (title, desc) => {
    console.log("added", title, desc);
    let num = todos[todos.length] + 1;

    const addedtodo = {
      num: num,
      title: title,
      desc: desc
    }

    setTodos([...todos, addedtodo]);

  }



  return (
    <div className="App">
      <Header />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} deletetodo={deletetodo} />
      

    </div>
  );
}

export default App;
