import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/Hero";

import styles from "../../styles/Blog.module.scss";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...{ title: "blog." }} />
      </main>
    </div>
  );
};

export default Blog;
