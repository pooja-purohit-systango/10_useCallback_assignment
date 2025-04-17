import React, { useState } from 'react'

const ChildComponent1 = ({count}) => {

    console.log("Child component 1 rendered with count", count)


  return (
    <div>
        <div>Count : {count}</div>
    </div>
  )
}

export default ChildComponent1