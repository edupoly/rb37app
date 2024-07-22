import React from 'react'
import { connect } from 'react-redux'
function Counter(props) {
    console.log(props)
  return (
    <div className="border border-2 m-2 p-2">
        <h2>Counter:{props.counterR.count}</h2>
    </div>
  )
}

export default connect(function(store){return store})(Counter)