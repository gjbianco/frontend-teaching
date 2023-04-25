import { useState } from "react";

import { TodoItem } from "../services/todo";

export function TodoItemForm(props: {
  onSubmit: (item: TodoItem) => Promise<void>;
}) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          await props.onSubmit({ message: todoText, completed: false });
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
      <button type="submit" disabled={!todoText}>
        Add
      </button>
    </form>
  );
}
