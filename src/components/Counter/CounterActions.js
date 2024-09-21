import { useDispatch } from "react-redux";

import React from "react";
import { decrement, increment } from "../../redux/counterSlice";

function CounterActions(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default CounterActions;
