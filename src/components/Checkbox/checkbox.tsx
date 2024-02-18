"use client";

import React, { useState } from "react";
import Style from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  const checkboxClass = checked ? Style.checked : Style.checkbox;

  return (
    <div>
      <input className={checkboxClass} type="checkbox" onChange={onChange} />
    </div>
  );
}

function getFullName(firstName: string, lastName: string) {
  const fullName = firstName + lastName;
  return fullName;
}

getFullName("mo", "tai");
