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
      <Link href="/projects/remoet-dev">
        <a className={styles.linkText}>remoet.dev</a>
      </Link>
    </li>
    <li className={styles.listItem}>
      I still code some here 👉{" "}
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
        here
      </a>{" "}
      OR{" "}
      <a
        className={styles.linkText}
        href="https://carlw.hashnode.dev"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>
    </li>
  </ul>
);

export default SummaryList;
