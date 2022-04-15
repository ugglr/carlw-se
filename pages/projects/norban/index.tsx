import type { NextPage } from "next";
import Head from "next/head";
import ProjectHero from "../../../components/ProjectHero";
import norbanContent from "../../../content/norban.content";

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
      </main>
    </div>
  );
};

export default Norban;
