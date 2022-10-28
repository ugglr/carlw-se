import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../../components/heroes/Hero";
import ProjectCard from "../../components/ProjectCard";
import brewtimeContent from "../../content/brewtime.content";
import norbanContent from "../../content/norban.content";

import styles from "../../styles/Projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer | projects</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...{ title: "current projects." }} />

        <div className={styles.contentContainer}>
          <div className={styles.projectsContainer}>
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
          </div>
        </div>

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Projects;
