"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import TodoList from "../components/todo-list/TodoList";
import { AddTodoForm } from "@/components/add-todo-form";
import { getData, addData, updateData, deleteData, dropData } from "../api";

export default function Home() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getData();
      setTodos(data);
    } catch (error) {
      console.error("Failed to fetch todo items:", error);
    }
  };

  const handleTodoChange = async (id: number, state: ITodoItem) => {
    if (state.title.trim() === "") {
      return;
    }
    try {
      const newData = await updateData(id, state);
      setTodos((todos) =>
        todos.map((todo) => (todo.id === id ? newData : todo))
      );
    } catch (error) {
      console.error("Failed to update todo:", error);
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
    try {
      await deleteData(todoID);
      setTodos(todos.filter((todo) => todo.id !== todoID));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleMoveTodo = (dropTargetId: number, dragItemId: number) => {
    const fromIndex = todos.findIndex((todo) => todo.id === dragItemId);
    const toIndex = todos.findIndex((todo) => todo.id === dropTargetId);
    const newTodos = [...todos];
    newTodos.splice(toIndex, 0, newTodos.splice(fromIndex, 1)[0]);
  };

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        <AddTodoForm onAddTodo={handleAddTodo} />
        <TodoList
          data={todos}
          onMoveTodo={handleMoveTodo}
          onTodoChange={handleTodoChange}
          onDeleteTodo={handleDeleteTodo}
        />
      </section>
    </main>
  );
}
