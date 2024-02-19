"use client";

import React, { useState } from "react";
import styles from "./TodoListItem.module.css";
import TrashIcon from "../Thrash/TrashIcon";
import Checkbox from "../Checkbox/Checkbox";
import { useHover } from "@uidotdev/usehooks";
import classnames from "classnames";

interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
}

export default function TodoItem({ item, children }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(children);
  
  function handleTextChange(e: React.ChangeEvent<HTMLSpanElement>) {
    children = e.target.innerText;
  }

  // Function to handle saving edited text
  const handleSave = () => {
    // Save the edited text
    children = editedText;
    setIsEditing(false);
  };

  return (
    <li className={styles.liBox}>
      <Checkbox checked={isChecked} onChange={setIsChecked} />

      <span
        className={classnames("title", {
          [styles.completed]: isChecked,
          [styles.title]: true,
        })}
        onClick={() => setIsEditing(true)}
        contentEditable
        onBlur={handleSave}
        onInput={handleTextChange}
      >
        {children}
      </span>

      <div className={styles.divBox}>
        <TrashIcon />
      </div>
    </li>
  );
}
