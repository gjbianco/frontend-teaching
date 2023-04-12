import React, { useEffect, useState } from "react";
import { TodoItem, addTodoItem, getTodoItems } from "./services/todo";

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { message: "foo", completed: false },
    { message: "bar", completed: true },
  ]);

  useEffect(() => {
    getTodoItems().then(setTodos);
  }, [todos]);

  return (
    <>
      <h2>Todo List</h2>
      <TodoForm />
      {todos.map((todo) => (
        <>
          <input type="checkbox" value={todo.completed + ""} />
          <span>{todo.message}</span>
        </>
      ))}
    </>
  );
}

function TodoForm() {
  const [todoText, setTodoText] = useState("");

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    try {
      await addTodoItem({
        message: todoText,
        completed: false,
      });
      setTodoText("");
    } catch (e) {
      alert(e);
    }
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.currentTarget.value)}
      />
      <button type="submit" onClick={submitForm}>
        Add
      </button>
    </form>
  );
}
