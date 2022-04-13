import "../styles/globals.scss";
import type { AppProps } from "next/app";

// Site wide applied layout
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
