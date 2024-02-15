import React from "react";
import Styles from "./todolistitem.module.css";
import Checkbox from "../Checkbox/checkbox";


interface TodoItemProps {
  item: ITodoItem;
  children: React.ReactNode;
}

export default function TodoItem({
  item,
  children,
}: TodoItemProps) {


  return (
    <li className={Styles.border}>
      <Checkbox />
       <span className={item.completed ? Styles.completed : ""}>{children}</span>
      
    </li>
  );
}
