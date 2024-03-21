const { addTodo } = require("./add-todo");

describe("test if add function works correctly", () => {
  test("add a todo at end of list", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ];

    const newTodo = { id: 3, title: "Todo 3", completed: false };
    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(addTodo(prevTodos, newTodo)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ]);
  });

  test("if wrong id then return error", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const newTodo = { title: "Todo 3", completed: true };
    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(() => addTodo(prevTodos, newTodo)).toThrow(
      "could not add todo with wrong ID"
    );
  });

  test("if title doesnt exist throw error", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const newTodo = { id: 4, title: "", completed: true };
    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(() => addTodo(prevTodos, newTodo)).toThrow(
      "please provide a title"
    );
  });
});
