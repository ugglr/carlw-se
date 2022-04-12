import { ReactElement } from "react";

import styles from "./Footer.module.scss";

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div>
        <h2>carlw.se - Carefully crafted instant legacy code.</h2>
      </div>
    </footer>
  );
}

export default Footer;
