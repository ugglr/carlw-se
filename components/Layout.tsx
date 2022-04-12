import Navbar from "./Navbar";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: any;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
