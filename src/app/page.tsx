"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import TodoList from "../components/todo-list/TodoList";
import { AddTodoForm } from "@/components/add-todo-form";

const API_URL = "https://65c53ee5dae2304e92e41ae7.mockapi.io/api/todos/";

async function getData() {
  const result = await fetch(API_URL);

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
}

async function addData(data: ITodoItem) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to add data");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
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
      return;
    }
    const newData = await updateData(id, state);

    setTodos((todos) => todos.map((todo) => (todo.id === id ? newData : todo)));
  };

  const handleAddTodo = async (todo: ITodoItem) => {
    if (todo.title.trim() === "") {
      return;
    }

    const newTodoData: ITodoItem = {
      title: todo.title,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await addData(newTodoData);
      setTodos([...todos, response]);
    } catch (error) {
      console.error("Failed to add new todo:", error);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        <AddTodoForm onAddTodo={handleAddTodo} />
        <TodoList data={todos} onTodoChange={handleTodoChange} />
      </section>
    </main>
  );
}
