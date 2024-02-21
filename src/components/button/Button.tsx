"use client";

import styles from "./Index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "delete";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  className: string;
}

function Button(children,){

    return{

    }
}