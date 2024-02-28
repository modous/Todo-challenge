"use client";

import React from "react";
import styles from "./index.module.css";
import { TodoItem } from "../todo-item/TodoItem";

interface ListProps {
  data: ITodoItem[];
}

export default function List({ data }: ListProps) {
  // Handle checkbox click to toggle completion

  //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
  if (data.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Create your first todo</p>
      </div>
    );
  }

  return (
    <ul className={styles.ulContainer}>
      {data.map((item) => (
        <li className={styles.listItemContainer} key={item.id}>
          <TodoItem
            completed={item.completed}
            title={item.title}
            onTitleChange={() => console.log("onTextchange")}
          />
        </li>
      ))}
    </ul>
  );
}
