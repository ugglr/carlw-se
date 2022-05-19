import type { NextPage } from "next";
import Head from "next/head";
import ProjectHero from "../../../components/ProjectHero";
import brewtimeContent from "../../../content/brewtime.content";

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
      </main>
    </div>
  );
};

export default Brewtime;
