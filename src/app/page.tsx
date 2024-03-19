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

    const updatedTodo = todos.find((todo) => todo.id === id);
    if (!updatedTodo) return;

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, ...state } : todo))
    );

    try {
      await updateData(id, state);
    } catch (error) {
      console.error("Failed to update todo:", error);
      setTodos(prevTodos);
    }
  };

  const handleAddTodo = async (todo: IAddTodoItemData) => {
    const prevTodos = [...todos];
    const newTodoData: IAddTodoItemData = {
      title: todo.title,
      completed: false,
    };

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: -1, createdAt: "", ...newTodoData },
    ]);

    if (todo.title.trim() === "") {
      return;
    }

    try {
      const addedTodo = await addData(newTodoData);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === -1 ? { ...addedTodo } : todo))
      );
    } catch (error) {
      console.error("Failed to add new todo:", error);
      setTodos(prevTodos);
    }
  };

  const handleDeleteTodo = async (todoID: number) => {
    const prevTodos = [...todos];
    const deletedTodo = todos.find((todo) => todo.id === todoID);
    if (!deletedTodo) return;

    setTodos(todos.filter((todo) => todo.id !== todoID));

    try {
      await deleteData(todoID);
    } catch (error) {
      console.error("Failed to delete todo:", error);
      window.alert("Failed to delete todo. Please try again later.");
      setTodos(prevTodos);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
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
