'use client'
 

import React, { useState } from "react";


interface CheckboxProps {
    label: string;
    
  }

export const Checkbox = ({ label }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
        <label>
            <input
                type="checkbox"
                onChange={() => setIsChecked(prev => !prev)}
            />
            {label}
        </label>
        <p>{isChecked ? "Completed" : ""}</p>
    </div>
    );
  };