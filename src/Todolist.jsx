import React,{useState,useRef, useEffect, useCallback} from 'react'
import { useStorageState } from './hooks/useStorageState'
import Todo from './Todo'
function Todolist() {
    var [todos,setTodos]=useStorageState([])
    var [newTodo,setNewTodo] = useState('')
    var tref = useRef();
    function addTodo(){
        setTodos([...todos,newTodo])
    }
    useEffect(()=>{
        tref.current.focus()
    },[])
    function checkEnter(e){
        if(e.key==='Enter'){
            addTodo();
            tref.current.value='';
        }
    }
    useEffect(()=>{
        console.log("Todolist component rendered")
    })
    var deleteTodo = useCallback(function(ind){
        var temp = [...todos];
        console.log('asd',temp)
        temp.splice(ind,1);
        console.log('asd',temp)
        setTodos([...temp]);
    },[todos])
    return (
        <div className="border border-2 border-info m-2 p-2 w-50">
            <h1>Edupoly Todolist</h1>
            <div class="input-group mb-3">
                <input type="text" onKeyUp={checkEnter} onChange={(e)=>{setNewTodo(e.target.value)}} ref={tref} class="form-control"/>
                <span class="input-group-text"><button className='btn btn-success' onClick={()=>{addTodo()}}><i class="bi bi-patch-plus-fill"></i>Todo</button></span>
            </div>
            <div>
                {
                    todos.map((todo,i)=>{
                        return <Todo title={todo} deleteTodo={deleteTodo} id={i}></Todo>
                    })
                }
            </div>
        </div>
    )
}

export default Todolist