"use client";

import React, { useState } from "react";
import Style from "./checkbox.module.css";

interface CheckboxProps {
  label: string;
}

export const Checkbox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };
  const checkboxClass = isChecked ? Style.checked : Style.checkbox;

  return (
    <div>
      <label>
        <input
           className={checkboxClass}
          type="checkbox"
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
};
