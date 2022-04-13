import styles from "./Tag.module.scss";

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps) => (
  <div className={styles.tag}>
    <p>{tag}</p>
  </div>
);

export default Tag;
