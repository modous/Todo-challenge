'use client'
 

import React, { useState } from "react";


interface CheckboxProps {
    label: string;
    
  }

export default function Checkbox({checked, onChange}: CheckboxProps) {

  const checkboxClass = checked ? Style.checked : Style.checkbox;

  return (
    <div>
      <input
        className={checkboxClass}
        type="checkbox"
        onChange={onChange}
      />
    </div>
    );
  };