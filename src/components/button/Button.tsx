"use client";

import classnames from "classnames";
import styles from "./Index.module.css";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "lg";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "deleteButton";
}

export function Button({
  children,
  type = "button",
  size = "sm",
  icon,
  className,
  variant = "primary",
  ...props
}: IButtonProps) {
  return (
    <button
      className={classnames(
        styles.button,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
          [styles.deleteButton]: variant === "deleteButton",
          [styles.sm]: size === "sm",
          [styles.lg]: size === "lg",
        },
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
