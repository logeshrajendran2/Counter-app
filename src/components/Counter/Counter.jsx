import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter Application</h1>
      <h2>{count}</h2>

      {count === 0 && <p>Minimum limit reached</p>}

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
