import { useEffect, useState } from "react"
export function useStorageState(){
    var [todos,setTodos] = useState([])
    useEffect(()=>{
        if(window.localStorage.getItem('todos')){
            setTodos([...JSON.parse(window.localStorage.getItem('todos'))])
        }
    },[])
    useEffect(()=>{
        window.localStorage.setItem("todos",JSON.stringify([...todos]))
    },[todos])
    return [todos,setTodos]
}