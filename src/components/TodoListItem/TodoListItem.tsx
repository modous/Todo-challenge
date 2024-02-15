import React from "react";
import Styles from "./todolistitem.module.css";
import Thrash from "../Thrash/Thrash";
import Checkbox from "../Checkbox/Checkbox";


interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
}

export default function TodoItem({ item, children }: TodoItemProps) {
  return (
    <li className={Styles.border}>
      <Checkbox />
      <span className={item.completed ? Styles.completed : ""}>{children}</span>
      <Thrash />
    </li>
  );
}
