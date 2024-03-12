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

async function addData(data: IAddTodoItemData) {
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

async function deleteData(todoID: number) {
  try {
    const response = await fetch(API_URL + `${todoID}`, {
      method: "Delete",
    });

    if (!response.ok) {
      throw new Error("Failed to remove data");
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
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

  const handleAddTodo = async (todo: IAddTodoItemData) => {
    if (todo.title.trim() === "") {
      return;
    }

    const newTodoData: IAddTodoItemData = {
      title: todo.title,
      completed: false,
    };

    try {
      const response = await addData(newTodoData);
      setTodos([...todos, response]);
    } catch (error) {
      console.error("Failed to add new todo:", error);
    }
  };

  const handleDeleteTodo = async (todoID: number) => {
    try {
      await deleteData(todoID);
      setTodos(todos.filter((todo) => todo.id !== todoID));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        <AddTodoForm onAddTodo={handleAddTodo} />
        <TodoList
          data={todos}
          onTodoChange={handleTodoChange}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}
