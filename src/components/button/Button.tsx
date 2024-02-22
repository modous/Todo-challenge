"use client";

import classnames from "classnames";
import styles from "./Index.module.css";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  type = "button",
  size = "md",
  icon,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classnames(
        styles.button,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        },
        styles[size],
        className
      )}
      type={type}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
