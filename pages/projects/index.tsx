import type { NextPage } from "next";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Hello 👋 I&apos;m Carl</p>
        <h1 className={styles.title}>Projects.</h1>
      </main>
    </div>
  );
};

export default Projects;
