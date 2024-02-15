"use client";

import { ReactNode } from "react";
import Style from "./Checkbox.module.css";

interface ButtonProps{
    type?: 'primary' | 'secondary';
    icon?: ReactNode;
    iconPosition?: 'left' | 'right' ;
}

export default function Button(type: any, icon: any, iconPosition: any):ButtonProps {
    return (
      <button type='secondary' icon={trashIcon}>
      </button>
    );
  }