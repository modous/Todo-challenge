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

  // Function to handle pressing Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
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
          onKeyDown={handleKeyPress}
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
