import type { NextPage } from "next";
import Head from "next/head";
import { SectionHeader } from "../../../components/layout";
import ProjectHero from "../../../components/ProjectHero";
import norbanContent from "../../../content/norban.content";

import styles from "../ProjectPage.module.scss";

const Norban: NextPage = () => {
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
            title: norbanContent.organisationName,
            description: norbanContent.longDescription,
            images: norbanContent.app.images,
            websiteUrl: norbanContent.websiteUrl,
            appstoreUrl: norbanContent.appstoreUrl,
            playstoreUrl: norbanContent.playstoreUrl,
          }}
        />

        <div className={styles.heroMargin} />

        <SectionHeader {...{ title: "Work duties" }} />

        <div className={styles.infoContainer}>
          <p>
            Except the CTO, I was the first engineer they hired and as such I
            have worked on all parts of the stack and essentially filled any
            role needed to move forward. We have been shipping code to
            production weekly without stop for the last years.
          </p>
          <h2>Milestones</h2>
          <ul>
            <li>Grew tech team 2x</li>
            <li>Grew the amount of user onboardings 4x</li>
            <li>
              Created analytics service from scratch, handling 100s of
              collection points accross platforms.
            </li>
          </ul>
          <h2>The stack</h2>
          <ul>
            <li>Mobile App - React Native</li>
            <li>Website - React, SSR+CSR, Graphql</li>
            <li>Backend - Express.js, Apollo Server / GraphQL / Postgresql</li>
            <li>Analytics service - Nestjs, MongoDB, Graphql</li>
          </ul>
        </div>

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Norban;
