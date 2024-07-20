import React, { useContext } from 'react'
import { UserContext } from './UserContext'

function B() {
    var {name,age}=useContext(UserContext)
  return (
    <div className="border border-2 border-success p-2 m-2">
        <h1>B Component</h1>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
    </div>
  )
}

export default B