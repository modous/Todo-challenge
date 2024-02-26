"use client";

import classnames from "classnames";
import styles from "./Index.module.css";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  size?: "smIcon" | "mdIcon" | "lgIcon" | "smLabel" | "mdLabel";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "deleteButton";
}

export function Button({
  children,
  type = "button",
  size = "mdIcon",
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
          [styles.sm]: size === "smIcon",
          [styles.md]: size === "mdIcon",
          [styles.lg]: size === "lgIcon",
          [styles.smLabel]: size === "smLabel",
          [styles.mdLabel]: size === "mdLabel",
          
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
