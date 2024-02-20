"use client";

import React, { useState } from "react";
import styles from "./Index.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  // const [isChecked, setIsChecked] = useState(checked);
  const checkboxClass = checked ? styles.checked : styles.checkbox;

  // function toggleIsChecked() {
  //   setIsChecked(!isChecked);
  // }

  // console.log(isChecked);

  return (
    <div>
      <input
        className={checkboxClass}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
    </div>
  );
}

// interface GetFullNameProps {
//   firstName: string;
//   lastName: string;
// }

// function getFullName({firstName, lastName }: GetFullNameProps) {
//   const fullName = firstName + lastName;
//   return fullName;
// }

// getFullName({firstName: "mo", lastName: "tai"});

// export function FullName({firstName, lastName}: GetFullNameProps){
//   const fullName = firstName + lastName;

//   return(
//     <p>{fullName}</p>
//   );
// }
