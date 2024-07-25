import React from 'react'
import { decAction, incAction } from './store/actions';
import { connect } from 'react-redux'
function Counter(props) {
  console.log("Counter Rendered");

  return (
    <div className="border border-2 m-2 p-2">
        <h2>Counter:{props.count}</h2>
        <button onClick={()=>{props.increment()}}>Increment</button>
        <button onClick={()=>{props.decrement()}}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counterR
}
function mapDispatchToProps(dispatch){
  return {
    increment:()=>{dispatch(incAction())},
    decrement:()=>{dispatch(decAction())},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)