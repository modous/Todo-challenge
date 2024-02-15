import React from "react";
import Styles from "./list.module.css";
import TodoItem from "../TodoListItem/TodoListItem";




interface ListProps {
  data: ITodoItem[];
}

export default function List({ data }: ListProps) {
  // Handle checkbox click to toggle completion

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
        <TodoItem item={item} key={item.id} >
         {item.title}
        </TodoItem>
      ))}
    </ul>
  );
}

