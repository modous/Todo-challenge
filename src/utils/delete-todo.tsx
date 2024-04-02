export function deleteTodo(todos: ITodoItem[], todoId: number) {
  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index < 0) {
    throw Error(`Could not find todo with ID: ${todoId}`);
  }

  const newTodos = [...todos];
  newTodos.splice(index, 1);

  return newTodos;
}
