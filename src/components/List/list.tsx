import React from "react";
import Styles from "./list.module.css";


type TodoItem = {
  id: string;
  title: string;
};

interface ListProps {
  data: TodoItem[];
};

function List({data}: ListProps){
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
};

export default List;
