import { TodoItem } from "../services/todo";

export function TodoItemList(props: {
  items: TodoItem[];
  deleteItem: (index: number) => Promise<void>;
  toggleCompletion: (index: number) => Promise<void>;
}) {
  return (
    <>
      {props.items.map((todo, index) => (
        <div key={index}>
          <span
            style={{ fontSize: "18pt" }}
            onClick={() => props.toggleCompletion(index)}
          >
            {todo.completed ? "☒" : "☐"}
          </span>
          <span>{todo.message}</span>
          <button onClick={() => props.deleteItem(index)}>X</button>
        </div>
      ))}
    </>
  );
}
