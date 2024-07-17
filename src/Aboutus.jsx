import React from 'react'
import { useLocation } from 'react-router-dom'

function Aboutus() {
  var x = useLocation();
  console.log(x)
  return (
    <div className='m-2 p-2 border border-info'>
        <h1>We are Edupoly for better training</h1>
        <h3>{x.state.likes}</h3>
    </div>
  )
}

export default Aboutus