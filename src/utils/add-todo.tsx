export function addTodo(todos: ITodoItem[], newTodo: ITodoItem) {
  if (newTodo.title.trim() === "") {
    throw Error("please provide a title");
  }

  const newTodos = [...todos];

  newTodos.push(newTodo);
  return newTodos;
}
