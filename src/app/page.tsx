import styles from "./page.module.css";
import Layout from "./layout";


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
