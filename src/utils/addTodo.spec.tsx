const { addTodo } = require("./add-todo");

describe("test if add function works correctly", () => {
  test("add a todo at end of list", () => {
    //make array with objects
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
    ];

    const newTodo = { id: 3, title: "Todo 3", completed: false };
    //The test that renders the function and compares the ID and completed.
    expect(addTodo(prevTodos, newTodo)).toEqual([
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ]);
  });

  test("if title doesnt exist throw error", () => {
    const prevTodos = [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: true },
      { id: 3, title: "Todo 3", completed: false },
    ];

    const newTodo = { id: 4, title: "", completed: true };

    expect(() => addTodo(prevTodos, newTodo)).toThrow("please provide a title");
  });
});
