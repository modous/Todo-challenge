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

  return (
    <li className={styles.liBox}>
      <Checkbox checked={isChecked} onChange={setIsChecked} />

      <span
        className={classnames("title", {
          [styles.completed]: isChecked,
          [styles.title]: true,
        })}
      >
        {children}
      </span>

      <div className={styles.divBox}>
        <TrashIcon />
      </div>
    </li>
  );
}
