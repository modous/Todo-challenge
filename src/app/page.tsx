"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { TodoList } from "../components/todo-list";
import { AddTodoForm } from "@/components/add-todo-form";
import { getData, addData, updateData, deleteData } from "../api";
import { Loader } from "@/components/loader";

export default function Home() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [titleError, setTitleError] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const data = await getData();
    setTodos(data);
    setLoading(false);
  };

  const handleTodoChange = async (id: number, state: ITodoItem) => {
    const prevTodos = [...todos];
    if (state.title.trim() === "") {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, ...state } : todo))
    );

    try {
      await updateData(id, state);
    } catch (error) {
      setTodos(prevTodos);
    }
  };

  const handleAddTodo = async (todo: IAddTodoItemData) => {
    if (todo.title.trim() === "") {
      setTitleError(true);
      console.log("HIHIHIHI", titleError);
      return;
    } else {
      setTitleError(false);
      console.log("HIHIHIHI", titleError);
    }
    const prevTodos = [...todos];
    const newTodoData: IAddTodoItemData = {
      title: todo.title,
      completed: false,
    };
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: -1, createdAt: "", ...newTodoData },
    ]);

    try {
      const addedTodo = await addData(newTodoData);

      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === -1 ? { ...addedTodo } : todo))
      );
    } catch (error) {
      setTodos(prevTodos);
      setTitleError(true);
    }
  };

  const handleDeleteTodo = async (todoID: number) => {
    const prevTodos = [...todos];

    setTodos(todos.filter((todo) => todo.id !== todoID));

    try {
      await deleteData(todoID);
    } catch (error) {
      setTodos(prevTodos);
      window.alert("Failed to delete todo. Please try again later.");
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        {titleError && <h1 className={styles.error}>Please insert a title</h1>}
        <AddTodoForm onAddTodo={handleAddTodo} />

        {loading ? (
          <Loader />
        ) : (
          <TodoList
            data={todos}
            onTodoChange={handleTodoChange}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </main>
  );
}
