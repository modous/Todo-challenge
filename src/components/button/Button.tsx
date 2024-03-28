"use client";

import classnames from "classnames";
import styles from "./Index.module.css";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "lg";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}

//hello

export function Button({
  children,
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
          [styles.sm]: size === "sm",
          [styles.lg]: size === "lg",
          [styles.iconOnly]: icon && !children,
        },
        className
      )}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
