import React, { useState,useEffect, useCallback, useMemo, useRef } from 'react'
import { useStorageState } from './customHooks'
import Todo from './Todo'
function Todolist() {
    var [newtodo,setNewtodo]=useState('')
    var [todos,setTodos] = useStorageState([])
    var tref = useRef();
    useEffect(()=>{
      console.log("Todolist Component Rendered");
      tref.current.focus();
    })
      function addTodo(){
        setTodos([...todos,{title:newtodo,price:222}])
        tref.current.value='';
      }
      var deleteTodo = useCallback(function(ind){
        var temp = JSON.parse(JSON.stringify(todos));
        temp.splice(ind,1)
        setTodos([...temp])
      },[todos])
      function checkEnter(e){
        if(e.key==='Enter'){
          addTodo();
        }
      }
  return (
    <div className="p-2 m-2 w-50">
        <h1>Edupoly Todolist</h1>
        <div class="input-group mb-3">
          <input className="form-control" type="text" onKeyUp={checkEnter} onChange={(e)=>{setNewtodo(e.target.value)}} ref={tref}/>
          <span class="input-group-text" id="basic-addon2">
            <button onClick={addTodo} className="btn btn-success"><i class="bi bi-plus-circle-fill"></i> Todo</button>
          </span>
        </div>
        <div className='d-flex'>
          
        </div>
        <div>
          {
            todos.map((todo,i)=>{
              return <Todo todo={todo} deleteTodo={deleteTodo} id={i}></Todo>
            })
          }
        </div>
    </div>
  )
}

export default React.memo(Todolist);