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
}

export function TodoItem({ item, children }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [title, setTitle] = useState(item.title);

  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Function to handle saving edited text
  const handleSave = () => {
    // Dit is een property van het component dat wordt afgevuurd
    // wanneer je de nieuwe title wil saven, met daarin de nieuwe title.
    setTitle(title);
    setIsEditing(false);
  };

  return (
    <li className={styles.liBox}>
      <Checkbox checked={isChecked} onChange={setIsChecked} />

      <input
        className={classnames({
          [styles.completed]: isChecked,
          [styles.title]: true,
        })}
        onClick={() => setIsEditing(true)}
        onBlur={handleSave}
        onChange={handleTextChange}
        value={title}
      ></input>

      <div className={styles.divBox}>
        <TrashIcon />
      </div>
    </li>
  );
}
