import Link from "next/link";

import styles from "./SummaryList.module.scss";

const SummaryList = () => (
  <ul>
    <li className={styles.listItem}>
      I code 👉{" "}
      <Link href="/projects/norban">
        <a className={styles.linkText}>Norban.</a>
      </Link>
    </li>
    <li className={styles.listItem}>
      I code even more 👉{" "}
      <Link href="/projects/brewtime">
        <a className={styles.linkText}>Brewtime</a>
      </Link>
    </li>
    <li className={styles.listItem}>
      I write about code 👉{" "}
      <a
        className={styles.linkText}
        href="https://www.dev.to/ugglr"
        target="_blank"
        rel="noreferrer"
      >
        DEV.to/ugglr
      </a>
    </li>
    <li className={styles.listItem}>
      I take photos 👉{" "}
      <a
        className={styles.linkText}
        href="https://www.instagram.com/hangzhouist/"
        target="_blank"
        rel="noreferrer"
      >
        instagram.com/hangzhouist
      </a>
    </li>
  </ul>
);

export default SummaryList;
