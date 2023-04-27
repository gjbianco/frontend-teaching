import { TodoItem } from "../services/todo";

export function TodoItemList(props: {
  items: TodoItem[];
  deleteItem: (index: number) => Promise<void>;
  toggleCompletion: (index: number) => Promise<void>;
}) {
  if (props.items.length === 0) {
    return <p>All done!</p>;
  } else {
    return (
      <>
        {props.items.map((todo, index) => (
          <div key={index}>
            <div style={{ textAlign: "right" }}>
              <big
                onClick={() => props.toggleCompletion(index)}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  float: "left",
                }}
              >
                {todo.message}
              </big>
              <button
                style={{
                  padding: "0 0.5em",
                  backgroundColor: "red",
                  marginTop: "0",
                  borderColor: "darkred",
                }}
                onClick={() => props.deleteItem(index)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </>
    );
  }
}
