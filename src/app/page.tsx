"use client";

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import TodoList from "../components/todo-list/TodoList";
import { AddTodoForm } from "@/components/add-todo-form";
import { getData, addData, updateData, deleteData } from "../api";

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
        {loading ? (
          <svg
            className={styles.loadingState}
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(153, 153, 153, 1)"
              d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite"
              />
            </path>
          </svg>
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
