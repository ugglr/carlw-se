import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import BlogPostCard from "../../components/BlogPostCard";
import Hero from "../../components/Hero";

import styles from "../../styles/Blog.module.scss";

const DEV_TO_URL = "https://dev.to/api/articles?username=ugglr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export type BlogPostFragment = {
  id: string;
  cover_image: string;
  published_at: string;
  title: string;
  description: string;
};

const Blog: NextPage = () => {
  const { data, error } = useSWR(`${DEV_TO_URL}`, fetcher);

  return (
    <div>
      <Head>
        <title>carlw.se - Fullstack engineer</title>
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

/*


canonical_url: "https://dev.to/ugglr/react-native-getting-user-device-timezone-and-converting-utc-time-stamps-using-the-offset-3jh8"
collection_id: null
comments_count: 2
cover_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--n_aDxH6a--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://images.unsplash.com/photo-1541694321475-c3078053d72d%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D3150%26q%3D80"
created_at: "2020-06-19T02:18:33Z"
crossposted_at: null
description: "Contrary to web React Native does not run in a browser, so it gets tricky when trying to get timezone offsets and accounting for daylight savings time.   "
edited_at: "2020-07-07T09:27:20Z"
id: 358562
last_comment_at: "2021-05-12T12:06:23Z"
path: "/ugglr/react-native-getting-user-device-timezone-and-converting-utc-time-stamps-using-the-offset-3jh8"
positive_reactions_count: 14
public_reactions_count: 14
published_at: "2020-06-19T12:37:33Z"
published_timestamp: "2020-06-19T12:37:33Z"
readable_publish_date: "Jun 19 '20"
reading_time_minutes: 5
slug: "react-native-getting-user-device-timezone-and-converting-utc-time-stamps-using-the-offset-3jh8"
social_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--S1usn79S--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://images.unsplash.com/photo-1541694321475-c3078053d72d%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D3150%26q%3D80"
tag_list: (4) ['javascript', 'react', 'tutorial', 'beginners']
tags: "javascript, react, tutorial, beginners"
title: "React Native: Getting user device timezone and converting UTC time-stamps using the offset."
type_of: "article"
url: "https://dev.to/ugglr/react-native-getting-user-device-timezone-and-converting-utc-time-stamps-using-the-offset-3jh8"
user:
github_username: "ugglr"
name: "Carl-W"
profile_image: "https://res.cloudinary.com/practicaldev/image/fetch/s--8ZVEEg9x--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/69865/068f0585-463c-4222-85de-d4129151b524.png"
profile_image_90: "https://res.cloudinary.com/practicaldev/image/fetch/s--Vt2PXRIt--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/69865/068f0585-463c-4222-85de-d4129151b524.png"
twitter_username: "ugglr_dev"
username: "ugglr"
website_url: "https://www.carlw.se"
[[Prototype]]: Object
[[Prototype]]: Object

*/
