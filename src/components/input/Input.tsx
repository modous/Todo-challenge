import { ComponentProps } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

interface IInputProps extends Omit<ComponentProps<"input">, "type"> {
  type?: "text" | "number" | "email" | "password" | "url";
  variant?: "normal" | "error" | "";
}

export function Input({ type, variant = "normal", ...props }: IInputProps) {
  return (
    <input
      type={type}
      className={classNames(styles.input, {
        [styles.input]: variant === "normal",
        [styles.errorInput]: variant === "error",
      })}
      {...props}
    />
  );
}
