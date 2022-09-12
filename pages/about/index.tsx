import { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/heroes/Hero";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...{ title: "about." }} />
      </main>
    </div>
  );
};

export default About;
