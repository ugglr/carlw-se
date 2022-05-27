import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { BlogPostFragment } from ".";
import Button from "../../components/Button";
import Hero from "../../components/Hero";
import Tag from "../../components/Tag";

import styles from "./Post.module.scss";

const DEV_TO_URL = "https://dev.to/api/articles";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, error } = useSWR<BlogPostFragment>(
    `${DEV_TO_URL}/${pid}`,
    fetcher
  );

  console.log(data);

  return (
    <div className={styles.container}>
      {error && <Hero {...{ title: error, smallTitle: true }} />}
      {data && (
        <>
          <Hero {...{ title: data.title, smallTitle: true }} />
          <div className={styles.content}>
            <div className={styles.contentContainer}>
              <h3>{data.created_at}</h3>
              <h2>{data.description}</h2>
              <div style={{ display: "flex" }}>
                {data.tags?.map((t: string) => (
                  <Tag key={t} {...{ tag: t }} />
                ))}
              </div>
              <div className={styles.buttonLinkContainer}>
                <a
                  href={`${data.canonical_url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button {...{ title: "See on DEV.to", variant: "black" }} />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.footerMargin} />
    </div>
  );
};

export default Post;
