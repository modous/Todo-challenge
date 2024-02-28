"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./index.module.css";

interface ICheckboxProps extends ComponentProps<"input"> {
  onCheckedChange?: (isChecked: boolean) => void;
}

export function Checkbox({
  checked,
  onChange,
  onCheckedChange,
  ...props
}: ICheckboxProps) {
  const checkboxClass = checked ? styles.checked : styles.checkbox;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    onCheckedChange?.(event.target.checked);
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
