const { updateTodos } = require("./update-todos");

describe("test if the todos update correctly", () => {
  test("update todo with matching id", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //maak 2 nieuwe variabele waar je de content van de items in de array wijzigt
    const id = 3;
    const state = { title: "Updated Todo", completed: true };

    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(updateTodos(prevTodos, id, state)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Updated Todo", completed: true },
    ]);
  });
  test("todo update when wrong ID", () => {
    //maak een fake array met objecten er in
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //maak 2 nieuwe variabele waar je de content van de items in de array wijzigt
    const id = -1;
    const state = { title: "Updated Todo", completed: true };

    //de test die de functie uitvoert en vergelijkt of de ID en completed klopt
    expect(() => updateTodos(prevTodos, id, state)).toThrow(
      "Could not find todo with ID: -1"
    );
  });
});
