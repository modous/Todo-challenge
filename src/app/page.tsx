"use client";

import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import TodoList from "../components/todo-list/TodoList";
import { Input } from "../components/input";
import { Button } from "../components/button";

const API_URL = "https://65c53ee5dae2304e92e41ae7.mockapi.io/api/todos/";

async function getData() {
  const result = await fetch(API_URL);

  if (!result.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return result.json();
}

async function updateData(todoID: number, data: ITodoItem) {
  try {
    const response = await fetch(API_URL + `${todoID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function Home() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getData();
    setTodos(data);
  };

  const handleTodoChange = async (id: number, state: ITodoItem) => {
    if (state.title.trim() === "") {
      // If the title is empty, return without updating the todo
      return;
    }
    const newData = await updateData(id, state);

    setTodos((todos) => todos.map((todo) => (todo.id === id ? newData : todo)));
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        <div className={styles.inputAndButtonContainer}>
          <Input placeholder="Add new to do" />
          <Button className={styles.addButton} variant="primary" size="lg">
            Add
          </Button>
        </div>
        <TodoList data={todos} onTodoChange={handleTodoChange} />
      </section>
    </main>
  );
}
