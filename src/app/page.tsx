"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { TodoList } from "../components/todo-list";
import { AddTodoForm } from "@/components/add-todo-form";
import * as api from "../api";
import { Loader } from "@/components/loader";
import { updateTodos } from "@/utils/update-todos";
import { deleteTodo } from "@/utils/delete-todo";

export default function Home() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const data = await api.getData();
    setTodos(data);
    setLoading(false);
  };

  const handleTodoChange = async (id: number, state: ITodoItem) => {
    if (state.title.trim() === "") {
      return;
    }
    const newData = await api.updateData(id, state);

    setTodos((todos) => updateTodos(todos, id, newData));
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
      const response = await api.addData(newTodoData);
      setTodos((todos) => addTodo(todos, response));
    } catch (error) {
      console.error("Failed to add new todo:", error);
    }
  };

  const handleDeleteTodo = async (todoID: number) => {
    try {
      await api.deleteData(todoID);
      setTodos((todos) => deleteTodo(todos, todoID));
    } catch (error) {
      console.error("Failed to delete todo:", error);
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
