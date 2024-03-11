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
  const handleDrop = async (newOrder: number[], itemId: number) => {
    try {
      // Find the index of the dragged item in the current order
      const currentIndex = newOrder.indexOf(itemId);
      if (currentIndex === -1) {
        console.error("Item not found in the current order.");
        return;
      }

      // Remove the dragged item from the current order
      newOrder.splice(currentIndex, 1);

      // Find the index where the item should be inserted based on the position it was dropped
      const dropIndex = newOrder.findIndex((id) => id === itemId);
      if (dropIndex === -1) {
        console.error("Drop index not found.");
        return;
      }

      // Insert the item at the drop index
      newOrder.splice(dropIndex, 0, itemId);

      console.log(newOrder);

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
      {data.map((item, index) => (
        <Droppable
          key={item.id}
          onDrop={(newOrder) => handleDrop(newOrder, item.id)}
        >
          <li className={styles.listItemContainer} key={item.id}>
            <Draggable itemID={item.id}>
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
