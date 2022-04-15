import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            href="/fonts/SFProText/SFProText-Regular.otf"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/SFProText/SFProText-Semibold.otf"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            href="/fonts/SFProText/SFProText-Bold.otf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
