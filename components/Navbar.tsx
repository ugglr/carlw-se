import Link from "next/link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <a>CW.</a>
        </Link>
      </div>
      <div>
        <div>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
