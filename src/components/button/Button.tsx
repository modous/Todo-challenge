"use client";

import styles from "./Index.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "delete";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  className: string;
}

export function Button({
  children,
  onClick,
  type = "button",
  size = "medium",
  icon,
  className,
}: ButtonProps) {
  return <button className={`button ${type} ${size} ${className}`} onClick={onClick}>{children}</button>;
}
