import React from "react";
import "./App.css";

import Counter from "./Counter";
import { BulletedList } from "./ListComponent";

export default function App() {
  return (
    <div className="App">
      {/* a simple stateless component */}
      {/* <BulletedList /> */}

      {/* a simple stateful counter component */}
      <Counter />
    </div>
  );
}
