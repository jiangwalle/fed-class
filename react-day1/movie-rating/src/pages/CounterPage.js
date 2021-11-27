import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/counterSlice';

const CounterPage = (props) => {
  // 第5步： 在组件中使用store中的值。通过useSelector绑定store中想要使用的值。
  const count = useSelector((state) => state.counter.value);

  // 第7步： 时候用useDispatch拿到dispatch方法，这样就可以派送一个action到reducer来处理。
  const dispatch = useDispatch();

  return (
    <div>
      <h2>计数器</h2>
      {/** 第8步： 使用dispatch来派送一个action。action是在slice里定义的，跟reducer同名。reducer接受到action之后，会进行处理，处理的结果会放在store中。 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {/** 第6步： 使用从store中拿到的值 */}
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  )
}

export default CounterPage;
