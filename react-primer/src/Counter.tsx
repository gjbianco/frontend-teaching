import { useState } from "react";

export default function Counter() {
  // create a new piece of state that defaults to 0
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>&#8593;</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>&#8595;</button>
      </div>
    </div>
  );
}
