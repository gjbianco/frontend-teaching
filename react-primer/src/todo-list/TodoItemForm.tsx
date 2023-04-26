import { useState } from "react";

import { TodoItem, validateTodoItem } from "../services/todo";

export function TodoItemForm(props: {
  onSubmit: (item: TodoItem) => Promise<void>;
}) {
  const [todoText, setTodoText] = useState("");

  // this is recalculated EVERY time the component is re-rendered
  // therefore, expensive and/or asynchronous function called this way create serious problems
  const newItem = { message: todoText, completed: false };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await props.onSubmit(newItem);
          setTodoText("");
        } catch (e) {
          alert(e);
        }
      }}
    >
      <input
        type="text"
        value={todoText}
        required={true}
        onChange={(e) => setTodoText(e.currentTarget.value)}
      />
      <button type="submit" disabled={!validateTodoItem(newItem)}>
        Add
      </button>
    </form>
  );
}
