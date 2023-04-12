export type TodoItem = {
  message: string;
  completed: boolean;
};

// specify type, otherwise it is any[]
const todoItems: TodoItem[] = [];

// notice that the corret return type is inferred
export async function getTodoItems() {
  return Promise.resolve(todoItems);
}

export async function addTodoItem(item: TodoItem) {
  // copy item so that a reference can't be stored
  todoItems.push({ ...item });
  return Promise.resolve();
}

export async function toggleCompletion(index: number) {
  todoItems[index].completed = !todoItems[index].completed;
  return Promise.resolve();
}
