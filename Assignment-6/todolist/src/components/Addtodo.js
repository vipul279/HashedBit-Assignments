import React, { useState } from 'react';
import './Addtodo.css';

export const Addtodo = ({addtodo}) => {

    const [title,settitle]=useState('');
    const [description,setdescription]=useState('');

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !description){
            alert('Title or Description can not be blank');
        }
        else{
            addtodo(title,description);
            settitle('');
            setdescription('');
        }
    }
  return (
    <div className='form-container'>
        <form onSubmit={submit}>
            Todo Title: 
            <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} placeholder='Enter the task title'/>
            <br />
            Description: 
            <input type="text" value={description} onChange={(e)=>{setdescription(e.target.value)}} placeholder= 'Enter its description'/>
            <br />
            <button type="submit">Add Todo</button>
        </form>
    </div>
 )
}
