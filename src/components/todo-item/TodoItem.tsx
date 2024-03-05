"use client";

import React, { useState } from "react";
import styles from "./index.module.css";
import { Checkbox } from "../checkbox";
import classnames from "classnames";
import { HiMiniTrash } from "react-icons/hi2";
import { Button } from "../Button";

interface ITodoItemProps {
  completed: boolean;
  title: string;
  onTitleChange: (text: string) => void;
  onCompletedChange: (completed: boolean) => void;
}

export function TodoItem({
  completed,
  title,
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
    onTitleChange(editTitle);
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

  return (
    <div
      className={classnames(styles.container, {
        [styles.isEditing]: isEditing,
        [styles.onEdit]: isEditing,
      })}
    >
      <Checkbox checked={completed} onCheckedChange={onCompletedChange} />
      {isEditing ? (
        <input
          autoFocus
          className={classnames({
            [styles.completed]: completed,
            [styles.title]: true,
            [styles.editTitle]: true,
          })}
          onClick={() => setIsEditing(true)}
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
          onClick={() => setIsEditing(true)}
        >
          {editTitle}
        </button>
      )}
      <Button
        className={styles.deleteButton}
        type="button"
        size="sm"
        variant="secondary"
        icon={<HiMiniTrash />}
      />
    </div>
  );
}
