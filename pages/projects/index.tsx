import type { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import brewtimeContent from "../../content/brewtime.content";
import norbanContent from "../../content/norban.content";

import styles from "../../styles/Projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.topMargin} />

        <div className={styles.projectContainer}>
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
        </div>

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

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Projects;
