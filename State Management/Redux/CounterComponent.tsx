import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, increment, decrement } from "./redux/counterSlice";

const CounterComponent: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
