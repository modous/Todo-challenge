"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "./index.module.css";
import { Checkbox } from "../checkbox";
import classnames from "classnames";
import { HiMiniTrash } from "react-icons/hi2";
import { Button } from "../button";

interface ITodoItemProps {
  completed: boolean;
  title: string;
  onTitleChange: (text: string) => void;
}

export function TodoItem({ completed, title, onTitleChange }: ITodoItemProps) {
  //checkbox
  const [isChecked, setIsChecked] = useState(completed);

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
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const handleCancel = () => {
    setEditTitle(title);
    setIsEditing(false);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div
      className={classnames(styles.container, {
        [styles.isEditing]: isEditing,
        [styles.onEdit]: isEditing,
      })}
    >
      <Checkbox checked={isChecked} onChange={handleCheckboxChange} />

      {isEditing ? (
        <input
          autoFocus
          className={classnames({
            [styles.completed]: isChecked,
            [styles.title]: true,
            [styles.editTitle]: true,
          })}
          onClick={() => setIsEditing(true)}
          onBlur={handleSave}
          onChange={handleTextChange}
          value={editTitle}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <button
          className={classnames({
            [styles.completed]: isChecked,
            [styles.buttonTitle]: true,
          })}
          onClick={() => setIsEditing(true)}
        >
          {editTitle}
        </button>
      )}

      <Button
        className={classnames({
          [styles.deleteButton]: true,
        })}
        type="button"
        size="mdIcon"
        variant="deleteButton"
      >
        <HiMiniTrash className={styles.icon} />
      </Button>
    </div>
  );
}
