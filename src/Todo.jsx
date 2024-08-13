import React,{useEffect} from 'react'

function Todo(props) {
    useEffect(()=>{
        console.log(props.title," :: Todo component rendered")
    })
  return (
    <div className="border border-2 border-secondary m-2 p-2 d-flex justify-content-between">
        {props.title}
        <button onClick={()=>{props.deleteTodo(props.id)}} className='btn btn-danger'><i class="bi bi-trash3-fill"></i></button>
    </div>
  )
}

export default React.memo(Todo)