"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./index.module.css";
import classnames from "classnames";

interface ICheckboxProps extends Omit<ComponentProps<"input">, "type"> {}

export function Checkbox({ checked, onChange, ...props }: ICheckboxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };
  return (
    <input
      {...props}
      className={classnames(styles.checkbox)}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
    />
  );
}
