"use client";

import React, { useState } from "react";
import styles from "./Index.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  const checkboxClass = checked ? styles.checked : styles.checkbox;

  return (
    <input
      className={checkboxClass}
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  );
}
