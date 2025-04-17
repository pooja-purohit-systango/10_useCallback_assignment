import React, { useState } from 'react'
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2';

const ParentComponent = () => {

    const [count, setCount] = useState(0);

    function handleCount()  {
        setCount((prev) => prev + 1);
    }

    const [isDark, setThemeDark] = useState(false);

    function ToggleTheme() {
      setThemeDark((prev) => !prev)
    }

  return (
    <>
     <ChildComponent1 count={count} />
    <button onClick={handleCount}>Increment</button>

    <button onClick={ToggleTheme}>Theme</button>
    <ChildComponent2 theme = {isDark}></ChildComponent2>

    {console.log("isDark from parent : ", isDark)}
    </>
  )
}

export default ParentComponent