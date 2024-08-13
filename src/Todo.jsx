import React,{useEffect} from 'react'

function Todo({todo,deleteTodo,id}) {
    useEffect(()=>{
        console.log("Todo Component Rendered :: ",todo.title)
    })
  return (
    <div className="rounded d-flex justify-content-between align-items-center border border-success p-2 m-2">
        {todo.title}
        <button onClick={()=>{deleteTodo(id)}} className='btn btn-danger'>
        <i class="bi bi-trash3-fill"></i>
        </button>
    </div>
  )
}

export default React.memo(Todo)