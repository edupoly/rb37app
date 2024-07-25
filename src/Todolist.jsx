import React from 'react'
import { connect } from 'react-redux'

function Todolist(props) {
  console.log("Todolist rendered",props)
  return (
    <div className="border border-2 m-2 p-2">
        <h1>Todolist</h1>
        <input type="text" id="d1"/>
        <button onClick={()=>{props.addTodoItem(document.getElementById("d1").value)}}>Add Todo</button>
        <ul>
            {
                props.todos.map((t)=>{
                    return <li>{t}</li>
                })
            }
        </ul>
    </div>
  )
}
function mapStateToProps(state){
  console.log(state)
  return state.todosR
}
function mapDispatchToProps(dispatch){
  console.log(dispatch)
  return {
    addTodoItem:(nt)=>{dispatch({type:"ADD_TODO",payload:nt})}
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)
// 