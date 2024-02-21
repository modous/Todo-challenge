"use client";

import React, { useState } from "react";
import styles from "./Index.module.css";
import { Checkbox } from "../checkbox/Checkbox";
import { useHover } from "@uidotdev/usehooks";
import classnames from "classnames";
import { TrashIcon } from "../trash-icon";

interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
  onTextChange: (text: string) => void;
}

export function TodoItem({ item, onTextChange }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.completed);

  const [editTitle, setEditTitle] = useState(item.title);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  // Function to handle saving edited text
  const handleSave = () => {
    onTextChange(editTitle);
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

  return (
    <li className={styles.liBox}>
      <Checkbox checked={isChecked} onChange={setIsChecked} />

      {isEditing ? (
        <input
          autoFocus
          className={classnames({
            [styles.completed]: isChecked,
            [styles.title]: true,
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
        <span
          className={classnames({
            [styles.completed]: isChecked,
            [styles.spanTitle]: true,
          })}
          onClick={() => setIsEditing(true)}
        >
          {editTitle}
        </span>
      )}

      <div className={styles.divBox}>
        <TrashIcon />
      </div>
    </li>
  );
}
