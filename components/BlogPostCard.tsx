import Link from "next/link";
import styles from "./BlogPostCard.module.scss";
import Button from "./Button";

type BlogPostCardProps = {
  id: string;
  title: string;
  description: string;
};

const BlogPostCard = ({ id, title, description }: BlogPostCardProps) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>

    <div className={styles.buttonMargin} />

    <div className={styles.buttonWrapper}>
      <Link href={`/blog/${id}`} passHref scroll={false}>
        <Button {...{ variant: "black", title: "See more" }} />
      </Link>
    </div>
  </div>
);

export default BlogPostCard;
