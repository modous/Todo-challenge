"use client";

import { useState } from "react";
import styles from "./index.module.css";
import { TodoItem } from "../todo-item/TodoItem";
import Draggable from "../draggable/Draggable";
import Droppable from "../droppable/Droppable";

interface ListProps {
  data: ITodoItem[];
  onTodoChange: (id: number, state: ITodoItem) => void;
  onDeleteTodo: (id: number) => void;
  onUpdateTodoOrder: (newOrder: number[]) => Promise<void>;
}

export default function TodoList({
  data,
  onTodoChange,
  onDeleteTodo,
  onUpdateTodoOrder,
}: ListProps) {
  const handleDrop = async (newOrder: number[]) => {
    try {
      // Update the item order in the API
      await onUpdateTodoOrder(newOrder);
    } catch (error) {
      console.error("Failed to update todo order:", error);
    }
  };

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
        <Droppable key={item.id} onDrop={handleDrop}>
          <li className={styles.listItemContainer} key={item.id}>
            <Draggable item={item.id}>
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
            </Draggable>
          </li>
        </Droppable>
      ))}
    </ul>
  );
}
