import type { NextPage } from "next";
import Head from "next/head";
import ProjectHero from "../../../components/heroes/ProjectHero";

import styles from "../ProjectPage.module.scss";
import brewtimeContent from "../../../content/brewtime.content";
import { SectionHeader } from "../../../components/layout";

const Brewtime: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProjectHero
          {...{
            title: brewtimeContent.organisationName,
            description: brewtimeContent.longDescription,
            images: brewtimeContent.app.images,
            websiteUrl: brewtimeContent.websiteUrl,
            appstoreUrl: brewtimeContent.appstoreUrl,
          }}
        />

        <div className={styles.heroMargin} />

        <SectionHeader {...{ title: "why." }} />

        <div className={styles.infoContainer}>
          <p>
            During the pandemic I got weird about coffee. After a bit of
            research all the coffee apps I found available was not how I thought
            about coffee so I made my own! Front to back, devops and all.
          </p>
          <h2>milestones.</h2>
          <ul>
            <li>Featured on producthunt as top 10 apps of the day.</li>
            <li>No outages since launch.</li>
          </ul>
          <h2>the stack.</h2>
          <ul>
            <li>Mobile App - React Native</li>
            <li>Website - Next.js (Typescript)</li>
            <li>Backend - Nest.js, MongoDB / Mongoose, GraphQL, Passport.js</li>
            <li>Devops - Heroku, Github Actions, CI/CD</li>
          </ul>
        </div>

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Brewtime;
