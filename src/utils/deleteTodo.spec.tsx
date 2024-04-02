const { deleteTodo } = require("./delete-todo");

describe("test if the delete works correctly", () => {
  test("delete a todo with matching ID", () => {
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const id = 3;

    expect(deleteTodo(prevTodos, id)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ]);
  });

  test("delete todo when wrong ID", () => {
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const id = -1;
    const state = {};

    expect(() => deleteTodo(prevTodos, id, state)).toThrow(
      "Could not find todo with ID: -1"
    );
  });

  test("deletes correct item in array", () => {
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const id = 1;
    const state = { title: "Updated Todo", completed: true };

    expect(() => deleteTodo(prevTodos, id, state)).not.toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ]);
  });
});
