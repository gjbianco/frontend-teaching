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
            onClick={() => props.toggleCompletion(index)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.message}
          </span>
          <span onClick={() => props.deleteItem(index)}>&nbsp;&nbsp;X</span>
        </div>
      ))}
    </>
  );
}
