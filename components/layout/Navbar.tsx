import Link from "next/link";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>CW.</a>
        </Link>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.linksContainer}>
          <div className={styles.link}>
            <Link href="/about">
              <a>about.</a>
            </Link>
          </div>

          <div className={styles.linkMargin} />

          <div className={styles.link}>
            <Link href="/blog">
              <a>blog.</a>
            </Link>
          </div>

          <div className={styles.linkMargin} />

          <div className={styles.link}>
            <Link href="/projects">
              <a>projects.</a>
            </Link>
          </div>
        </div>

        <div className={styles.linkMargin} />

        <a href="https://github.com/ugglr" target="_blank" rel="noreferrer">
          <SiGithub className={styles.socialIcon} />
        </a>

        <div className={styles.linkMargin} />
        <a
          href="https://www.linkedin.com/in/igelstrom/"
          target="_blank"
          rel="noreferrer"
        >
          <SiTwitter className={styles.socialIcon} />
        </a>

        <div className={styles.linkMargin} />

        <a
          href="https://www.linkedin.com/in/igelstrom/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
