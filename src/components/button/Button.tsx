"use client";

import classnames from "classnames";
import styles from "./Index.module.css";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export function Button({
  children,
  type = "button" ,
  size = "md",
  icon,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classnames("button", type, size, className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}


