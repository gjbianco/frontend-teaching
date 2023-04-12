const FLAKY_API = true;

// specify type, otherwise it is any[]
const todoItems: TodoItem[] = [];

export type TodoItem = {
  message: string;
  completed: boolean;
};

// notice that the corret return type is inferred
export async function getTodoItems() {
  return Promise.resolve(todoItems);
}

export async function addTodoItem(item: TodoItem) {
  // copy item so that a reference can't be stored
  if (FLAKY_API && Math.random() < 0.5) {
    todoItems.push({ ...item });
    return Promise.resolve();
  } else {
    return Promise.reject("Failed creating todo list item! Please try again.");
  }
}

export async function toggleCompletion(index: number) {
  todoItems[index].completed = !todoItems[index].completed;
  return Promise.resolve();
}
