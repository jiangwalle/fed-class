import React, { useState } from 'react';

const StepCounter = (props) => {
  let [count, setCount] = useState(props.value);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count - 1) }}>-</button>
      <button onClick={() => { setCount(count + 1) }}>+</button>
    </div>
  )
}

export default StepCounter;