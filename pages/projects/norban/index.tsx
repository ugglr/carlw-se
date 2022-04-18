import type { NextPage } from "next";
import Head from "next/head";
import { SectionHeader } from "../../../components/layout";
import ProjectHero from "../../../components/ProjectHero";
import Tag from "../../../components/Tag";
import norbanContent from "../../../content/norban.content";

import styles from "../../../styles/ProjectPage.module.scss";

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
        <SectionHeader {...{ title: "What I do" }} />

        <div className={styles.row}>
          <div className={styles.column}>
            <ul>
              <li>Website ✅</li>
              <li>Website ✅</li>
              <li>Website ✅</li>
              <li>Website ✅</li>
              <li>Website ✅</li>
              <li>Website ✅</li>
            </ul>
          </div>
          <div className={styles.column}>
            {norbanContent.tags.map((tag) => (
              <Tag key={tag} {...{ tag }} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Norban;
