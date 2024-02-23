import { ComponentProps } from "react";
import styles from "./Index.module.css";

interface IInputProps extends Omit<ComponentProps<"input">, "type"> {
  type?: "text" | "number" | "email" | "password" | "url";
}

export function Input({ value, onChange, type, ...props }: IInputProps) {
  return <input type={type} className="" {...props}></input>;
}
