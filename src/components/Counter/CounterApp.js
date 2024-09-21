import React from "react";
import CounterState from "./CounterState";
import CounterActions from "./CounterActions";

function CounterApp(props) {
  return (
    <div>
      <CounterState />
      <CounterActions />
    </div>
  );
}

export default CounterApp;
