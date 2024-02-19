import React from "react";
import styles from "./TodoList.module.css";
import TodoListItem from "../TodoListItem/TodoListItem";

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
    <ul className={styles.list}>
      {data.map((item) => (
        <TodoListItem item={item} key={item.id}>
          {item.title}
        </TodoListItem>
      ))}
    </ul>
  );
}
