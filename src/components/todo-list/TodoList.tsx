"use client";

import styles from "./index.module.css";
import { TodoItem } from "../todo-item/TodoItem";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop } from "react-dnd";
import { DropTarget } from "./DropTarget";

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
  //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
  if (data.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>Create your first todo</p>
      </div>
    );
  }
  const handleDrop = (dropTargetId: number, dragItemId: number) => {
    console.log("drop:", dropTargetId, dragItemId);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={styles.ulContainer}>
        {data.map((item) => (
          <li className={styles.listItemContainer} key={item.id}>
            <DropTarget>
              <TodoItem
                id={item.id}
                onCompletedChange={(id: number, completed: boolean) =>
                  onTodoChange(id, { ...item, completed })
                }
                onDelete={(id: number) => onDeleteTodo(id)}
                completed={item.completed}
                title={item.title}
                onTitleChange={(id: number, title: string) =>
                  onTodoChange(id, { ...item, title })
                }
              />
            </DropTarget>
          </li>
        ))}
      </ul>
    </DndProvider>
  );
}
