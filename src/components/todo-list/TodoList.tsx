"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { TodoItem } from "../todo-item/TodoItem";

interface ListProps {
  data: ITodoItem[];
  onTodoChange: (id: number, state: ITodoItem) => void;
  onDeleteTodo: (id: number) => void;
}

export function TodoList({ data, onTodoChange, onDeleteTodo }: ListProps) {
  //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
  if (data.length === 0) {
    return <p className={styles.emptyState}>Create your first todo</p>;
  }

  return (
    <ul className={styles.ulContainer}>
      {!onDeleteTodo && (
        <p className={styles.error}>
          Failed to delete todo. Please try again later.
        </p>
      )}
      {data.map((item) => (
        <li className={styles.listItemContainer} key={item.id}>
          <TodoItem
            onCompletedChange={(completed: boolean) =>
              onTodoChange(item.id, { ...item, completed })
            }
            onDelete={() => onDeleteTodo(item.id)}
            completed={item.completed}
            title={item.title}
            onTitleChange={(title: string) =>
              onTodoChange(item.id, { ...item, title })
            }
          />
        </li>
      ))}
    </ul>
  );
}
