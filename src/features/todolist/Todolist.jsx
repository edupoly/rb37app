import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice';

function Todolist() {
    const todos = useSelector(state=>state.todoRed.todos);
    const dispatch = useDispatch();
    const [newtodo,setNewTodo] = useState('')
  return (
    <div className='border border-success p-2 m-2'>
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}}/>
        <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
        <ul>
            {todos.map((t)=>{
                return <li>{t}</li>
            })}
        </ul>
    </div>
  )
}

export default Todolist