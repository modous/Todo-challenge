export function addTodo(todos: ITodoItem[], newTodo: ITodoItem) {
  if (newTodo.title.trim() === "") {
    throw Error("please provide a title");
  }
  //dwadwad
  const newTodos = [...todos];

  newTodos.push(newTodo);
  return newTodos;
}
