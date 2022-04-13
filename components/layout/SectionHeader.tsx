import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => (
  <div className={styles.sectionHeader}>
    <h1 className={styles.title}>{title}</h1>
  </div>
);

export default SectionHeader;
