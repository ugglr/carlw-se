/* eslint-disable react/jsx-no-target-blank */
import Link from "next/link";
import { ReactElement } from "react";
import Button from "../Button";

import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLevel}>
        <Link href="/">
          <a className={styles.navLinks}>home.</a>
        </Link>
        <Link href="/projects">
          <a className={styles.navLinks}>current projects.</a>
        </Link>
        <a
          className={styles.navLinks}
          href="https://carlw.hashnode.dev/"
          target="_blank"
          rel="noopener"
        >
          blog.
        </a>
      </div>
      <div className={styles.subLevel}>
        <div className={styles.textMargin} />
        <div className={styles.textMargin} />

        <h1 className={styles.ctaText}>
          Want to know if I can bring value to your team?
        </h1>
        <h1 className={styles.ctaText}>(I totally can)</h1>
        <h1 className={styles.ctaText}>Send me a message to discuss.</h1>
        <h1 className={styles.ctaText}>👇</h1>
        <div className={styles.ctaButtonContainer}>
          <a href="mailto:carl.igelstrom@gmail.se">
            <Button variant="purple" title="Email me." />
          </a>
        </div>

        <div className={styles.textMargin} />
        <div className={styles.textMargin} />

        <div>
          <h1 className={styles.megaText}>carl-w.</h1>
          <h1 className={styles.megaText}>fullstack.</h1>
          <h1 className={styles.megaText}>engineer.</h1>
        </div>

        <div className={styles.textMargin} />
        <p>
          open-sourced @ 👉{" "}
          <a
            className={styles.linkText}
            href="https://github.com/ugglr/carlw-se"
          >
            Github
          </a>{" "}
          👈
        </p>
        <div className={styles.textMargin} />
        <p>
          Made with ☕️ and Typescript. copyright © 2022{" "}
          <a className={styles.linkText} href="https://www.github/ugglr">
            ugglr
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
