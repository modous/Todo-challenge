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
}

export default function TodoList({
  data,
  onTodoChange,
  onDeleteTodo,
}: ListProps) {
  const [itemOrder, setItemOrder] = useState<number[]>(
    data.map((item) => item.id)
  );

  const [currentItem, setCurrentItem] = useState<number | null>(null);
  // Function to handle drag start
  const onDragStart = (id: number) => {
    // Set the current dragged item ID
    setCurrentItem(id);
    console.log("Drag started. Item ID:", id);
  };

  // Function to handle drop
  const onDrop = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (currentItem !== null) {
      const newItemOrder = [...itemOrder]; // Create a copy of itemOrder
      const draggedItemId = currentItem; // Get the dragged item ID
      const dropIndex = parseInt(e.currentTarget.dataset.index || ""); // Get the index where the item is dropped
      newItemOrder.splice(dropIndex, 0, draggedItemId as number); // Ensure draggedItemId is of type number
      setItemOrder(newItemOrder); // Update itemOrder state
      console.log("Item dropped. New item order:", newItemOrder);
    }
  };

  // Function to handle drag over
  const onDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
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
        <Droppable
          onDrop={onDrop}
          onDragOver={onDragOver}
          key={item.id}
          itemOrder={itemOrder}
        >
          <li className={styles.listItemContainer} key={item.id}>
            <Draggable item={item.id} onDragStart={() => onDragStart(item.id)}>
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
