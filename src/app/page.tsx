// page.tsx
import Layout from "./layout";
import React from "react";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://65c53ee5dae2304e92e41ae7.mockapi.io/api/todos/"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.h1Div}>
          <h1 className={styles.h1}>Todo list</h1>
        </section>
      </main>
    </Layout>
  );
}
