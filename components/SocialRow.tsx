import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from "react-icons/si";
import {
  githubUrl,
  instagramUrl,
  linkedinUrl,
  twitterUrl,
} from "../content/links.content";

import styles from "./SocialRow.module.scss";

const SocialRow = () => (
  <div className={styles.row}>
    <a
      className={styles.icon}
      href={githubUrl}
      target="_blank"
      rel="noreferrer"
    >
      <SiGithub />
    </a>

    <div className={styles.iconMargin} />

    <a
      className={styles.icon}
      href={twitterUrl}
      target="_blank"
      rel="noreferrer"
    >
      <SiTwitter />
    </a>

    <div className={styles.iconMargin} />

    <a
      className={styles.icon}
      href={linkedinUrl}
      target="_blank"
      rel="noreferrer"
    >
      <SiLinkedin />
    </a>

    <div className={styles.iconMargin} />

    <a
      className={styles.icon}
      href={instagramUrl}
      target="_blank"
      rel="noreferrer"
    >
      <SiInstagram />
    </a>
  </div>
);

export default SocialRow;
