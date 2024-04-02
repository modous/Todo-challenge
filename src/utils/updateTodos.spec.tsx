const { updateTodos } = require("./update-todos");

describe("test if the todos update correctly", () => {
  test("update todo with matching id", () => {
    //make fake array with objects
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    //Make 2 new variables where the content of the items in the array change/update
    const id = 3;
    const state = { title: "Updated Todo", completed: true };

    //the test that the function renders and looks if the ID and completed match
    expect(updateTodos(prevTodos, id, state)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Updated Todo", completed: true },
    ]);
  });
  test("todo update when wrong ID", () => {
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const id = -1;
    const state = { title: "Updated Todo", completed: true };

    expect(() => updateTodos(prevTodos, id, state)).toThrow(
      "Could not find todo with ID: -1"
    );
  });
});
