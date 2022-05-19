import { ReactElement } from "react";
import Button from "../Button";

import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <h2>carlw.se - Fullstack Engineer.</h2>
    </footer>
  );
}

export default Footer;
