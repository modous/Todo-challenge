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
      // Revert UI changes on failure
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    }
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
    const deletedTodo = todos.find((todo) => todo.id === todoID);
    if (!deletedTodo) return;

    setTodos(todos.filter((todo) => todo.id !== todoID));

    try {
      await deleteData(todoID);
    } catch (error) {
      console.error("Failed to delete todo:", error);
      setTodos((prevTodos) => [...prevTodos, deletedTodo]);
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
