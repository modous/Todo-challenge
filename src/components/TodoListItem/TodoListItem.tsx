import React from "react";
import Styles from "./todolistitem.module.css";
import Checkbox from "../Checkbox/Checkbox";


interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
}

export default function TodoItem({ children }: TodoItemProps) {
  return (
    <li className={Styles.border}>
      <Checkbox />
      {children}
    </li>
  );
}