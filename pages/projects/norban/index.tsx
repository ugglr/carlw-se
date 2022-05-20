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

        <SectionHeader {...{ title: "Work duties" }} />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2, marginRight: "3rem", fontSize: "1.5rem" }}>
            <p style={{ margin: 0 }}>
              Except the CTO, I was the first engineer they hired and as such I
              have worked on all parts of the stack and essentially filled any
              role needed to move forward. We have been shipping code to
              production weekly without
            </p>
            <h2>Milestones</h2>
            <ul>
              <li style={{ marginBottom: "8px" }}>Grew tech team 2x</li>
              <li style={{ marginBottom: "8px" }}>
                Grew the amount of user onboardings 4x
              </li>
              <li style={{ marginBottom: "8px" }}>
                Created analytics service from scratch, handling 100s of
                collection points accross platforms.
              </li>
            </ul>
            <h2>The stack</h2>
            <ul>
              <li style={{ marginBottom: "8px" }}>Mobile App - React Native</li>
              <li style={{ marginBottom: "8px" }}>
                Website - React, SSR+CSR, Graphql
              </li>
              <li style={{ marginBottom: "8px" }}>
                Backend - Express.js, Apollo Server / GraphQL / Postgresql
              </li>
              <li style={{ marginBottom: "8px" }}>
                Analytics service - Nestjs, MongoDB, Graphql
              </li>
            </ul>
          </div>
          <div style={{ flex: 1 }} />
        </div>

        <div style={{ height: "7rem" }} />
      </main>
    </div>
  );
};

export default Norban;
