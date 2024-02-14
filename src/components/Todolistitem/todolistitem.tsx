// import React from "react";
// import Styles from "./list.module.css";
// import { TodoItem } from "../../types/type";
// import { Checkbox } from "../Checkbox/checkbox";

// interface TodoListItemProps {
//     item: TodoItem;
//     onCheckboxClick: (id: string) => void;
//   }


//   export default function Todolistitem({ item }: TodoListItemProps) {
//     // Handle checkbox click to toggle completion
  
//     //This is the Empty state. If the array that i get from the Api is empty i return a paragraph
//     if (item.length === 0) {
//       return (
//         <div className={Styles.emptyState}>
//           <p>Create your first todo</p>
//         </div>
//       );
//     }
  
//     return (
//       <ul className={Styles.ul}>
//         {data.map((item) => (
//           <li className={Styles.border} key={item.id}>
//             <Checkbox label={item.title} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
  