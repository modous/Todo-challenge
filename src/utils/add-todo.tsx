export function addTodo(todos: ITodoItem[], newTodo: ITodoItem) {
  if (newTodo.title.trim() === "") {
    throw Error("please provide a title");
  }

  if (typeof newTodo.id !== "number" || !newTodo.id) {
    throw Error(`could not add todo with wrong ID`);
  }

  const newTodos = [...todos];

  newTodos.push(newTodo);
  return newTodos;
}
