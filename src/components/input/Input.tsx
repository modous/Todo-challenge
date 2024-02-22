import { ComponentProps } from "react";
import styles from "./Index.module.css";

interface IInputProps extends ComponentProps<"input"> {
  value?: string;
  type?: "text" | "checkbox";
}

export function Input({ value, onChange, type, ...props }: IInputProps) {
  return <input type={type} {...props}></input>;
}
