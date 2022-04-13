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
      <div>
        <div className={styles.link}>
          <Link href="/projects">
            <a>projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
