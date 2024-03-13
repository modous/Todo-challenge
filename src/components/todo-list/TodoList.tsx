"use client";

import styles from "./index.module.css";
import { TodoItem } from "../todo-item/TodoItem";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropTarget } from "./DropTarget";

interface ListProps {
  data: ITodoItem[];
  onTodoChange: (id: number, state: ITodoItem) => void;
  onDeleteTodo: (id: number) => void;
  onMoveTodo: (dropTargetId: number, dragItemId: number) => void;
}

export default function TodoList({
  data,
  onTodoChange,
  onDeleteTodo,
  onMoveTodo,
}: ListProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts or when data changes
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain time
    }, 1000);

    // Clean up function to clear timeout when component unmounts or when data changes
    return () => clearTimeout(timeout);
  }, [data]); // Re-run effect whenever data changes

  if (loading) {
    return (
      <svg
        className={styles.loadingState}
        width="100px"
        height="100px"
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
    );
  }
  //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
  if (data.length === 0) {
    return <p className={styles.emptyState}>Create your first todo</p>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <ul className={styles.ulContainer}>
        {data.map((item) => (
          <li className={styles.listItemContainer} key={item.id}>
            <DropTarget
              onDrop={(dragItemId: number) => onMoveTodo(item.id, dragItemId)}
            >
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
