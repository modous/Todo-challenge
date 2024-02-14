import React from "react";
import Styles from "./todoitem.module.css";
import { Checkbox } from "../Checkbox/checkbox";



interface TodoItemProps {
  item: ITodoItem;
}

export const TodoItem = ({ item }: TodoItemProps) => {
  return (
        <li className={Styles.border} key={item.id}>
          <Checkbox label={item.title} />
        </li>
  );
};
