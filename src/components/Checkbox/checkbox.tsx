"use client";

import React, { useState } from "react";
import Style from "./Checkbox.module.css";

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  // const [isChecked, setIsChecked] = useState(checked);
  const checkboxClass = checked ? Style.checked : Style.checkbox;

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
