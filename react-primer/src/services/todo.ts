const FLAKY_API = true;
const TODO_KEY = "todos";

export type TodoItem = {
  message: string;
  completed: boolean;
};

export async function getTodoItems(): Promise<TodoItem[]> {
  const todos = localStorage.getItem(TODO_KEY);
  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
}

// notice that the return type is properly inferred
export async function addTodoItem(item: TodoItem) {
  if (FLAKY_API && Math.random() < 0.5) {
    const todos = await getTodoItems();
    localStorage.setItem(TODO_KEY, JSON.stringify([...todos, item]));
    return Promise.resolve(item);
  } else {
    return Promise.reject("Failed creating todo list item! Please try again.");
  }
}

export async function deleteItem(index: number) {
  const todoItems = await getTodoItems();

  // because we are going straight to a string anyway, we don't *really* need to copy the list
  // however, it is good practice to handle arrays in an immutable way
  const newList = [...todoItems.slice(0, index), ...todoItems.slice(index + 1)];
  localStorage.setItem(TODO_KEY, JSON.stringify(newList));
}

export async function toggleCompletion(index: number) {
  const todoItems = await getTodoItems();
  todoItems[index].completed = !todoItems[index].completed;
  localStorage.setItem(TODO_KEY, JSON.stringify(todoItems));
  return Promise.resolve();
}
