"use client";

import React, { useState } from "react";
import Style from "./checkbox.module.css";


export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
  };
  const checkboxClass = isChecked ? Style.checked : Style.checkbox;

  return (
    <div>
      <input
        className={checkboxClass}
        type="checkbox"
        onChange={handleChange}
      />
    </div>
  );
};


