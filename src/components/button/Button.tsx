"use client";

import classnames from "classnames";
import styles from "./index.module.css";
import { ComponentProps } from "react";

interface IButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "lg";
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
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
          [styles.sm]: size === "sm",
          [styles.lg]: size === "lg",
          [styles.iconOnly]: icon && !children,
        },
        className
      )}
      type={type}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
