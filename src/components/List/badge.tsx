import React from "react";
import Styles from "./list.module.css";


interface BadgeProps {
  text: string;
}


export default function Badge({ text }: BadgeProps) {
  return (
    <span className={Styles.badge}>
      {text}
    </span>
  );
}

