//de functie die we gaan testen
export function updateTodos(
  prevTodos: ITodoItem[],
  id: number,
  state: Partial<ITodoItem>
) {
  const index = prevTodos.findIndex((todo) => todo.id === id);

  if (index < 0) {
    throw Error(`Could not find todo with ID: ${id}`);
  }

  const todos = [...prevTodos];
  todos[index] = { ...todos[index], ...state };

  return todos;
}
