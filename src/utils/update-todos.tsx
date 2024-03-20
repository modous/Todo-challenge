//de functie die we gaan testen
export function updateTodos(prevTodos: ITodoItem[], id: number, state: {}) {
  return prevTodos.map((todo) =>
    todo.id === id ? { ...todo, ...state } : todo
  );
}
