import { ComponentProps } from "react";
import styles from "./index.module.css";

interface IInputProps extends Omit<ComponentProps<"input">, "type"> {
  type?: "text" | "number" | "email" | "password" | "url";
}

export function Input({ value, type, ...props }: IInputProps) {
  return <input type={type} className={styles.input} {...props} />;
}
