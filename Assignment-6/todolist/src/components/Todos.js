import React from 'react';
import Todoitem from './Todoitem';

export default function Todos(props) {
  return (
    <div className='container' style={{fontSize:'20px'}}>
      <br />
        <h2>Tasks to do</h2>
        <hr />
        {props.todos.length===0 ?"No Tasks for now" :
          props.todos.map((todo)=>{
            return <Todoitem todo={todo} key={todo.id} deletetodo={props.deletetodo} />
            })
        }
    </div>
  )
}
