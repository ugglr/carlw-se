import type { NextPage } from "next";
import Head from "next/head";
import { SectionHeader } from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import MegaHero from "../components/MegaHero";
import { homeHeroContent } from "../content/home.content";
import Lottie from "react-lottie";

import styles from "../styles/Home.module.scss";

import norbanContent from "../content/norban.content";
import brewtimeContent from "../content/brewtime.content";

import purpleCloud from "../public/lotties/purple-cloud.json";

const purpleCloudOptions = {
  loop: true,
  autoplay: true,
  animationData: purpleCloud,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
            subtitle: homeHeroContent.location,
            miniBottom: homeHeroContent.bottom,
            ctaButtonLabel: homeHeroContent.ctaButtonLabel,
            ctaButtonLink: homeHeroContent.ctaButtonLink,
          }}
        />

        <div className={styles.heroMargin} />

        <div className={styles.topLottieContainer}>
          <Lottie {...{ options: purpleCloudOptions }} />
        </div>

        <div className={styles.middleLottieContainer}>
          <Lottie {...{ options: purpleCloudOptions }} />
        </div>

        <section className={styles.subSection}>
          <SectionHeader {...{ title: "work." }} />
          <ProjectCard
            {...{
              title: norbanContent.organisationName,
              tags: norbanContent.tags,
              description: norbanContent.shortDescription,
              thumbnailSrc: norbanContent.app.splashScreen,
              websiteUrl: norbanContent.websiteUrl,
              internalUrl: "/projects/norban",
            }}
          />
        </section>

        <div className={styles.sectionMargin} />

        <section className={styles.subSection}>
          <SectionHeader {...{ title: "side project." }} />
          <ProjectCard
            {...{
              title: brewtimeContent.organisationName,
              tags: brewtimeContent.tags,
              description: brewtimeContent.shortDescription,
              thumbnailSrc: brewtimeContent.app.splashScreen,
              websiteUrl: brewtimeContent.websiteUrl,
              internalUrl: "/projects/brewtime",
            }}
          />
        </section>

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Home;
