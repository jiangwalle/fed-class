import React, { useEffect, useState } from 'react';

const Timer = (props) => {
  let [value, setValue] = useState(props.initValue);

  useEffect(() => {
    console.log(`==========`);

    const timer = setInterval(() => {
      setValue(prevValue => {
        console.log(prevValue, timer);
        if (prevValue === 1) {
          clearInterval(timer);
        }
        return prevValue - 1;
      });
    }, 1000);

    return () => {
      console.log(`Clear timer after component been unmounted`);
      clearInterval(timer);
    };
  }, []);
  
  return (
    <div>
      Time left: {value} Seconds
    </div>
  )
}

export default Timer;