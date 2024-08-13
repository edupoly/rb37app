import React, { useState,useEffect, useCallback, useMemo } from 'react'
import Todo from './Todo'
function Todolist() {
    var [newtodo,setNewtodo]=useState('')
    var [todos,setTodos] = useState([
        {
            title:'buy vegetables',
            price:100
        },
        {
            title:'goto goa',
            price:300
        },
        {
            title:'create institute app',
            price:200
        },
        {
            title:'make toy car',
            price:150
        },
    ])
    useEffect(()=>{
        console.log("Todolist Component Rendered")
      })
      function addTodo(){
        setTodos([...todos,{title:newtodo,price:222}])
      }
      var deleteTodo = useCallback(function(ind){
        var temp = JSON.parse(JSON.stringify(todos));
        temp.splice(ind,1)
        setTodos([...temp])
      },[todos])
  return (
    <div className="border border-info p-2 m-2">
        <h1>Todolist</h1>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
        <button onClick={addTodo}>Add Todo</button>
        {
            todos.map((todo,i)=>{
                return <Todo todo={todo} deleteTodo={deleteTodo} id={i}></Todo>
            })
        }
    </div>
  )
}

export default React.memo(Todolist);