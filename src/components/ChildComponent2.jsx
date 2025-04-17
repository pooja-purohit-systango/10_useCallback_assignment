import React from 'react'

const ChildComponent2 = React.memo ( ({theme}) => {

    console.log("Child component 2 rendered !!", theme)

    const dark = {"color" : 'white', "backgroundColor" : 'black'}

    const light = {"color" :'black', "backgroundColor" : 'white'}

  return (
    <div style={theme ? dark : light}>

        {theme ? <p>theme is dark</p>: <p>Theme is light</p>}

    </div>
  )
} )

export default ChildComponent2