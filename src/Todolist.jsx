import React from 'react'
import { connect } from 'react-redux'

function Todolist(props) {
  return (
    <div className="border border-2 m-2 p-2">
        <h1>Todolist</h1>
        <ul>
            {
                props.todosR.todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}

export default connect(store=>store)(Todolist)