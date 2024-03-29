"use client";

import { ChangeEvent, ComponentProps } from "react";
import styles from "./Index.module.css";
import classnames from "classnames";

interface ICheckboxProps extends ComponentProps<"input"> {
  onCheckedChange?: (isChecked: boolean) => void;
}

export function Checkbox({
  onChange,
  className,
  onCheckedChange,
  ...props
}: ICheckboxProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    onCheckedChange?.(event.target.checked);
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
