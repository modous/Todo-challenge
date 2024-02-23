"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./index.module.css";

interface ICheckboxProps extends Omit<ComponentProps<"input">, "type"> {}

export function Checkbox({ checked, onChange, ...props }: ICheckboxProps) {
  const checkboxClass = checked ? styles.checked : styles.checkbox;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };
  return (
    <input
      {...props}
      className={checkboxClass}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
}
