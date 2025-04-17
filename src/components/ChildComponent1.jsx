import React, { useState } from 'react'

const ChildComponent1 =  React.memo ( ({count, handleCount})  => {

    console.log("Child component 1 rendered with count", count)


  return (
    <div>
        <div>Count : {count}</div>
        <button onClick={handleCount}>Increment</button>
    </div>
  )
} )

export default ChildComponent1