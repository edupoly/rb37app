import React from 'react'

function Child(props) {
  return (
    <div className='border border-2 m-2 p-2'>
        <h3>Child:{props.name}-{props.children}</h3>
    </div>
  )
}

export default Child