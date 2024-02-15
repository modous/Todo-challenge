"use client";

import React from "react";
import Styles from "./thrash.module.css";

interface ButtonProps {
  checked: boolean;
  onChange: () => void;
}

export default function Button() {
  
  
  return (
    <div className={Styles.div}>
        <button className={Styles.button} type="button"></button>
    </div>
  );
};


