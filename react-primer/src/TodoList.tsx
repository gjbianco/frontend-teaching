import { useEffect, useState } from "react";
import {
  TodoItem,
  addTodoItem,
  getTodoItems,
  deleteItem,
  toggleCompletion,
} from "./services/todo";

export function TodoList() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { message: "foo", completed: false },
    { message: "bar", completed: true },
  ]);

  // call function only once
  useEffect(refreshItems, []);

  function refreshItems() {
    getTodoItems().then(setTodos);
  }

  return (
    <>
      <h2>
        Todo List
        <span onClick={refreshItems}>♻</span>
      </h2>
      <TodoItemForm
        onSubmit={async (item) => {
          await addTodoItem(item);
          refreshItems();
        }}
      />
      <TodoItemList
        items={todos}
        toggleCompletion={toggleCompletion}
        deleteItem={deleteItem}
      />
    </>
  );
}

function TodoItemForm(props: { onSubmit: (item: TodoItem) => Promise<void> }) {
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

function TodoItemList(props: {
  items: TodoItem[];
  deleteItem: (index: number) => void;
  toggleCompletion: (index: number) => void;
}) {
  return (
    <>
      {props.items.map((todo, index) => (
        <div key={index}>
          <span onClick={() => props.toggleCompletion(index)}>
            {todo.completed ? "☒" : "☐"}
          </span>
          <span>{todo.message}</span>
          <button onClick={() => props.deleteItem(index)}>X</button>
        </div>
      ))}
    </>
  );
}
