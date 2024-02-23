"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./Index.module.css";

interface ICheckboxProps extends ComponentProps<"input"> {}

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
