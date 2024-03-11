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
  const [todoItems, setTodoItems] = useState<ITodoItem[]>(data);

  const handleDrop = async (draggedItemId: number, dropIndex: number) => {
    try {
      const updatedTodoItems = [...todoItems];
      const draggedItemIndex = updatedTodoItems.findIndex(
        (item) => item.id === draggedItemId
      );
      if (draggedItemIndex === -1) {
        console.error("Dragged item not found in the current order.");
        return;
      }

      const draggedItem = updatedTodoItems.splice(draggedItemIndex, 1)[0];
      updatedTodoItems.splice(dropIndex, 0, draggedItem);
      setTodoItems(updatedTodoItems);

      // Prepare the new order to send to the server
      const newOrder = updatedTodoItems.map((item) => item.id);

      // Send a request to update the order of items on the server
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
        <Droppable key={item.id} onDrop={() => handleDrop(index, item.id)}>
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
