import { useEffect, useState } from "react";
import {
  TodoItem,
  addTodoItem,
  getTodoItems,
  deleteItem,
  toggleCompletion,
} from "../services/todo";
import { TodoItemList } from "./TodoItemList";
import { TodoItemForm } from "./TodoItemForm";

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  // call function only once
  useEffect(refreshItems, []);

  function refreshItems() {
    getTodoItems().then(setTodos);
  }

  async function handleSubmitTodo(item: TodoItem) {
    await addTodoItem(item);
    refreshItems();
  }

  async function handleDeleteTodo(index: number) {
    await deleteItem(index);
    refreshItems();
  }

  async function handleToggleCompletion(index: number) {
    await toggleCompletion(index);
    refreshItems();
  }

  return (
    <>
      <h1>Todo List</h1>

      <button onClick={refreshItems}>Refresh</button>
      <TodoItemList
        items={todos}
        toggleCompletion={handleToggleCompletion}
        deleteItem={handleDeleteTodo}
      />

      <TodoItemForm onSubmit={handleSubmitTodo} />
    </>
  );
}
