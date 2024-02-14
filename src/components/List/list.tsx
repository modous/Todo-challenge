import React from "react";
import Styles from "./list.module.css";
import { TodoItem } from "../../types/type";

interface ListProps {
  data: TodoItem[];
}

export default function List({ data }: ListProps) {
  //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
  if (data.length === 0) {
    return (
      <div className={Styles.emptyState}>
        <p>Create your first todo</p>
      </div>
    );
  }

  return (
    <ul className={Styles.ul}>
      {data.map((item) => (
        <li className={Styles.border} key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
