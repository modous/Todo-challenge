import Image from "next/image";
import styles from "./index.module.css";
import Layout from "../components/Layout";


export default function Home() {
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
