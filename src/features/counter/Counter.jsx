import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc,dec } from './counterSlice';
function Counter() {
   const count = useSelector(state=>state.counterRed.count)
   var dispatch = useDispatch();
  return (
    <div className='border border-success p-2 m-2'>
        <h1>Count:{count}</h1>
        <button onClick={()=>{dispatch(inc())}}>Increment</button>
        <button onClick={()=>{dispatch(dec())}}>Decrement</button>
    </div>
  )
}

export default Counter