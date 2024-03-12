"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { Checkbox } from "../checkbox";
import classnames from "classnames";
import { HiMiniTrash } from "react-icons/hi2";
import { Button } from "../button";
import { useDrag, useDrop } from "react-dnd";

interface ITodoItemProps {
  id: number;
  completed: boolean;
  title: string;
  onTitleChange: (id: number, text: string) => void;
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({
  id,
  completed,
  title,
  onDelete,
  onTitleChange,
  onCompletedChange,
}: ITodoItemProps) {
  //title edit
  const [editTitle, setEditTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  // Function to handle saving edited text
  const handleSave = () => {
    onTitleChange(id, editTitle);
    setIsEditing(false);
  };

  // Function to handle pressing Enter key
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  const handleCancel = () => {
    setEditTitle(title);
    setIsEditing(false);
  };

  const startEditing = () => {
    setEditTitle(title);
    setIsEditing(true);
  };

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "TODO_ITEM",
      item: { id, title },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [title]
  );

  return (
    <div
      className={classnames(styles.container, {
        [styles.isEditing]: isEditing,
        [styles.onEdit]: isEditing,
        [styles.dragging]: isDragging,
      })}
      ref={drag}
    >
      <Checkbox
        checked={completed}
        onCheckedChange={(checked) => onCompletedChange(id, checked)}
      />
      {isEditing ? (
        <input
          autoFocus
          className={classnames({
            [styles.completed]: completed,
            [styles.title]: true,
            [styles.editTitle]: true,
          })}
          onBlur={handleSave}
          onChange={handleTextChange}
          value={editTitle}
          onKeyDown={handleKeyDown}
        ></input>
      ) : (
        <button
          className={classnames({
            [styles.completed]: completed,
            [styles.buttonTitle]: true,
          })}
          onClick={startEditing}
        >
          {title}
        </button>
      )}
      <Button
        className={styles.deleteButton}
        type="button"
        size="sm"
        variant="secondary"
        icon={<HiMiniTrash />}
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
