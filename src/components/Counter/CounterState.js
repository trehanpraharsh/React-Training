import React from "react";
import { useSelector } from "react-redux";

function CounterState(props) {
  const data = useSelector((state) => state.counter.counter);

  return (
    <div>
      <p>The counter is : {data}</p>
    </div>
  );
}

export default CounterState;
