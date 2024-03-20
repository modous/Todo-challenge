const { deleteTodo } = require("./delete-todo");

describe("test if the delete works correctly", () => {
  test("delete a todo with matching ID", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //maak 2 nieuwe variabele waar je de content van de items in de array wijzigt
    const id = 3;

    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(deleteTodo(prevTodos, id)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ]);
  });

  test("delete todo when wrong ID", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //maak 2 nieuwe variabele waar je de content van de items in de array verwijderd
    const id = -1;
    const state = {};

    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(() => deleteTodo(prevTodos, id, state)).toThrow(
      "Could not find todo with ID: -1"
    );
  });

  test("deletes correct item in array", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //maak 2 nieuwe variabele waar je de content van de items in de array verwijderd
    const id = 1;
    const state = { title: "Updated Todo", completed: true };

    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(() => deleteTodo(prevTodos, id, state)).not.toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ]);
  });
});
