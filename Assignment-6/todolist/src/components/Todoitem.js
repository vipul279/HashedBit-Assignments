import React from 'react';
import './Todoitem.css'

export default function Todoitem({todo,deletetodo}) {
  return (
    <div className='todosdisplay'>
        <p>{todo.title}</p>
        <p>{todo.desc}</p>
        <button className='delete-button' onClick={()=>{deletetodo(todo)}}>Delete</button>

    </div>
  )
}
