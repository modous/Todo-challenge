"use client";

import React, { useState } from "react";
import styles from "./Index.module.css";
import { Checkbox } from "../checkbox/Checkbox";
import classnames from "classnames";
import { HiMiniTrash } from "react-icons/hi2";

interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
  onTitleChange: (text: string) => void;
}

export function TodoItem({ item, onTitleChange }: TodoItemProps) {
  //checkbox
  const [isChecked, setIsChecked] = useState(item.completed);

  //title edit
  const [editTitle, setEditTitle] = useState(item.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  // Function to handle saving edited text
  const handleSave = () => {
    onTitleChange(editTitle);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(item.title);
    setIsEditing(false);
  };

  // Function to handle pressing Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  // function to cancel when pressing escape
  const handleKeyEscape = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  const handleCheckboxChange = (isChecked: boolean) => {
    setIsChecked(isChecked);
  };

  return (
    <div
      className={classnames(styles.container, {
        [styles.isEditing]: isEditing,
        [styles.onEdit]: isEditing,
      })}
    >
      <Checkbox
        checked={isChecked}
        onChange={() => handleCheckboxChange(!isChecked)}
      />

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
          onKeyDown={(e) => {
            handleKeyPress(e);
            handleKeyEscape(e);
          }}
        ></input>
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

      <button
        className={classnames({
          [styles.deleteButton]: true,
        })}
        type="button"
      >
        <HiMiniTrash className={styles.icon} />
      </button>
    </div>
  );
}
