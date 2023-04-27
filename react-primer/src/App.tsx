import React from "react";
// import "./App.css";
import "./mvp.css";

import Counter from "./Counter";
import { BulletedList } from "./ListComponent";
import { Movies } from "./Movies";
import { TodoList } from "./todo-list/TodoList";

export default function App() {
  return (
    <main>
      {/* a simple stateless component */}
      <BulletedList />
      <hr />

      {/* a simple stateful counter component */}
      <Counter />
      <hr />

      {/* data-backed list */}
      <Movies />
      <hr />

      {/* data-backed and stateful todo list */}
      <TodoList />
    </main>
  );
}
