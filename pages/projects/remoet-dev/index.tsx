import type { NextPage } from "next";
import Head from "next/head";
import { SectionHeader } from "../../../components/layout";
import ProjectHero from "../../../components/heroes/ProjectHero";
import remoetContent from "../../../content/remoet.content";

import styles from "../ProjectPage.module.scss";

const Remoet: NextPage = () => {
  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer | remoet.dev</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ProjectHero
          {...{
            title: remoetContent.organisationName,
            description: remoetContent.longDescription,
            images: remoetContent.app.images,
            websiteUrl: remoetContent.websiteUrl,
          }}
        />

        <div className={styles.heroMargin} />

        <SectionHeader {...{ title: "why.?" }} />

        <div className={styles.infoContainer}>
          <p>
            Because I think there should be a better way for engineers to apply
            for jobs and I think remote work will play a big part in the future
            of work.
          </p>
        </div>

        <div className={styles.footerMargin} />
      </main>
    </div>
  );
};

export default Remoet;
