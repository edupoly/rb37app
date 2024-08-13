import React, { useEffect } from "react";
export function useStorageState([]){
    var [todos,setTodos]=React.useState([])
    function setStorageTodos(newTodo){
        setTodos((prevTodos)=>{return [...prevTodos,newTodo]})
    }
    useEffect(()=>{
        if(window.localStorage.getItem('todos')){
            console.log("HIH")
            setTodos(()=>{return JSON.parse(window.localStorage.getItem('todos'))})
        }
    },[])
    useEffect(()=>{
        if(todos.length!==0){
            window.localStorage.setItem('todos',JSON.stringify([...todos]))
        }
    },[todos.length])
    return [todos,setTodos];
}