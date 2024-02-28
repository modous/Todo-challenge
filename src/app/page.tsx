import React from "react";
import styles from "./index.module.css";
import List from "../components/todo-list/TodoList";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

async function getData() {
  const result = await fetch(
    "https://65c53ee5dae2304e92e41ae7.mockapi.io/api/todos/"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!result.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className={styles.main}>
      <section className={styles.todoSection}>
        <h1 className={styles.title}>Todo list</h1>
        <Input className={styles.input} placeholder="Add new to do" />
        <Button className={styles.addButton} variant="primary" size="lg">
          Add
        </Button>
        <List data={data} />
      </section>
    </main>
  );
}
