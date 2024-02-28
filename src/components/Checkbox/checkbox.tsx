"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./index.module.css";
import classnames from "classnames";

interface ICheckboxProps extends ComponentProps<"input"> {
  onCheckedChange?: (isChecked: boolean) => void;
}

export function Checkbox({
  className,
  onChange,
  onCheckedChange,
  ...props
}: ICheckboxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
  };
  return (
    <input
      {...props}
      className={classnames(styles.checkbox, className)}
      type="checkbox"
      onChange={handleChange}
    />
  );
}
