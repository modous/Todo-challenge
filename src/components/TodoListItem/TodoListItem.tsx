"use client";

import React, { useState } from "react";
import Styles from "./TodoListItem.module.css";
import TrashIcon from "../Thrash/TrashIcon";
import Checkbox from "../Checkbox/Checkbox";
import { useHover } from "@uidotdev/usehooks";

interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
}

export default function TodoItem({ item, children }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.completed);
  const [isHovering, setIsHovering] = useState(false);

  console.log(isChecked);
  return (
    <li className={Styles.liBox}>
      <Checkbox checked={isChecked} onChange={setIsChecked} />

      <span className={isChecked ? Styles.completed : ""}>{children}</span>
      <TrashIcon
        className={isHovering ? Styles.divBox : Styles.hidden}
        onChange={setIsHovering}
      />

      {/* 3. CSS method css modules */}
      {/* <i className={isHovering ? Styles.visible : Styles.hidden}>🗑️</i> */}
    </li>
  );
}
