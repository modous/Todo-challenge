import React from "react";
import Styles from "./list.module.css"

type TodoItem = {
  id: string;
  title: string;
};

type ListProps = {
  data: TodoItem[];
};

const List: React.FC<ListProps> = ({ data }) => {
  return (
    <ul className={Styles.li}>
      {data.map((item) => (
        <li className={Styles.border} key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default List;