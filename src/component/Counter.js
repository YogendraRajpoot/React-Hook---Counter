import React, { useState } from "react";
// import './App.css';

export const Counter = (prop) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{prop.name}</h1>
      <div className="component1">
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <button onClick={() => setCount(count*2)}>*2</button>
    </div>
  );
};
