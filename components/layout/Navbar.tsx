/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import { SiGithub, SiTwitter } from "react-icons/si";
import { FiMail } from "react-icons/fi";

import styles from "./Navbar.module.scss";
import { githubUrl, myEmail, twitterUrl } from "../../content/links.content";

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
            <a
              href="https://carlw.hashnode.dev/"
              target="_blank"
              rel="noopener"
            >
              blog.
            </a>
          </div>

          <div className={styles.linkMargin} />

          <div className={styles.link}>
            <Link href="/projects">
              <a>projects.</a>
            </Link>
          </div>
        </div>

        <div className={styles.linkMargin} />

        <a href={githubUrl} target="_blank" rel="noreferrer">
          <SiGithub className={styles.socialIcon} />
        </a>

        <div className={styles.linkMargin} />
        <a href={twitterUrl} target="_blank" rel="noreferrer">
          <SiTwitter className={styles.socialIcon} />
        </a>

        <div className={styles.linkMargin} />

        <a className={styles.emailCta} href={`mailto:${myEmail}`}>
          <FiMail className={styles.emailIcon} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
