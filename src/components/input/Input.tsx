import { ComponentProps } from "react";
import styles from "./Index.module.css";
import classNames from "classnames";

interface IInputProps extends Omit<ComponentProps<"input">, "type"> {
  type?: "text" | "number" | "email" | "password" | "url";
  error?: boolean;
}

export function Input({ type, error, ...props }: IInputProps) {
  return (
    <input
      type={type}
      className={classNames(styles.input, {
        [styles.error]: error,
      })}
      {...props}
    />
  );
}
