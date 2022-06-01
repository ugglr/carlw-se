import "../styles/globals.scss";
import type { AppProps } from "next/app";

// Site wide applied layout
import Layout from "../components/layout/Layout";

import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-3L776MBWQP`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3L776MBWQP', {
              page_path: window.location.pathname,
            });
                `}
      </Script>

      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  );
}

export default MyApp;

/*

            key={router.route}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}

            */
