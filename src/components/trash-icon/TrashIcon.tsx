"use client";

import React from "react";
import styles from "./Index.module.css";
import { HiMiniTrash } from "react-icons/hi2";

export function TrashIcon() {
  return (
    <button className={styles.button} type="button">
      <HiMiniTrash className={styles.icon}/>
    </button>
  );
}
