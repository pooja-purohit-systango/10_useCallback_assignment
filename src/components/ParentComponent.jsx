import React, { useState, useCallback} from 'react'
import ChildComponent1 from './ChildComponent1'
import ChildComponent2 from './ChildComponent2';

const ParentComponent = () => {

    const [count, setCount] = useState(0);


    const increment = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);

    const [isDark, setThemeDark] = useState(false);

    function ToggleTheme() {
      console.log("toggle theme function!!!!")
      setThemeDark((prev) => !prev)
    }

  return (
    <>
     <ChildComponent1 count={count} handleCount = {increment} />
    {/* <button onClick={handleCount}>Increment</button> */}

    <button onClick={ToggleTheme}>Theme</button>
    <ChildComponent2 theme = {isDark}></ChildComponent2>
    </>
  )
}

export default ParentComponent