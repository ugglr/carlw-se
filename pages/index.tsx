import type { NextPage } from "next";
import Head from "next/head";
import { SectionHeader } from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import MegaHero from "../components/MegaHero";
import { homeHeroContent } from "../content/home-page";

import norbanSplashScreen from "../public/images/norban-app/splash-screen.png";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ overflow: "hidden" }}>
        <MegaHero
          {...{
            miniTitle: homeHeroContent.greeting,
            megaLine1: homeHeroContent.megaline1,
            megaLine2: homeHeroContent.megaline2,
            description: homeHeroContent.description,
            subtitle: "China 📍",
            miniBottom: homeHeroContent.bottom,
          }}
        />

        <section>
          <SectionHeader {...{ title: "work." }} />
          <ProjectCard
            {...{
              title: "Norban.",
              tags: [
                "Fullstack",
                "TypeScript",
                "React",
                "React Native",
                "Express.js",
                "Nest.js",
                "GraphQL",
                "Postgresql",
                "MongoDB",
              ],
              description:
                "Real estate startup. I work on all parts of the stack, web, app, backend and other services.",
              thumbnailSrc: norbanSplashScreen,
              websiteUrl: "https://norban.se",
              internalUrl: "/norban",
            }}
          />
        </section>

        <section className={styles.subSection}>
          <SectionHeader {...{ title: "side project." }} />
          <ProjectCard
            {...{
              title: "Brewtime.",
              tags: [
                "Fullstack",
                "TypeScript",
                "React",
                "Next.js",
                "React Native",
                "Nest.js",
                "GraphQL",
                "MongoDB",
              ],
              description:
                "Soon launching on the App Store. Coffee logging app for weird coffee people.",
              thumbnailSrc: norbanSplashScreen,
              websiteUrl: "https://brewtime.app",
              internalUrl: "/brewtime",
            }}
          />
        </section>
      </main>
    </div>
  );
};

export default Home;
