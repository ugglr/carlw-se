import type { NextPage } from "next";
import Head from "next/head";
import HomeContent from "../content/home-page/HomeContent";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeContent />
    </div>
  );
};

export default Home;
