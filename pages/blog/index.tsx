import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import useSWR from "swr";
import BlogPostCard from "../../components/BlogPostCard";
import Hero from "../../components/heroes/Hero";

import styles from "../../styles/Blog.module.scss";

const DEV_TO_URL = "https://dev.to/api/articles?username=ugglr";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export type BlogPostFragment = {
  id: string;
  cover_image: string;
  published_at: string;
  title: string;
  description: string;
  created_at: string;
  tags: string[];
  canonical_url: string;
};

const Blog: NextPage = () => {
  const { data } = useSWR<BlogPostFragment[]>(`${DEV_TO_URL}`, fetcher);

  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer | blog</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...{ title: "blog." }} />

        <div className={styles.contentContainer}>
          <div className={styles.postsContainer}>
            {!data && <h3>Loading posts...</h3>}
            {data &&
              data.map((post: BlogPostFragment) => {
                console.log(post);
                const { id, title, description } = post;
                return (
                  <>
                    <BlogPostCard key={id} {...{ id, title, description }} />
                    <div className={styles.postMargin} />
                  </>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
