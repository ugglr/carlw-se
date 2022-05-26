import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CW.</a>
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.link}>
          <Link href="/about">
            <a>about</a>
          </Link>
        </div>

        <div className={styles.linkMargin} />

        <div className={styles.link}>
          <Link href="/blog">
            <a>blog</a>
          </Link>
        </div>

        <div className={styles.linkMargin} />

        <div className={styles.link}>
          <Link href="/projects">
            <a>current projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
