import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Hello I&apos;m Carl 👋</h2>
        <h1 className={styles.heroTitle}>They call me a</h1>
        <h1 className={styles.heroTitle}>Fullstack Engineer.</h1>
        <h2>Typescript | React | React Native | Node.js and all that.</h2>
        <p className={styles.locationText}>Currently in: Asia 📍 </p>
        <h1>👇</h1>
      </main>
    </div>
  );
};

export default Home;
