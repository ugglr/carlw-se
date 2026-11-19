import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import Motion from "./Motion";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carlw.se"),
  title: "Igelström, Carl · Software products from Sweden",
  description:
    "Igelström, Carl is a one-person software company in Sweden. It builds and runs Remoet and CrabStack, and takes on contract engineering work.",
  openGraph: {
    title: "Igelström, Carl",
    description:
      "A one-person software company in Sweden, behind Remoet and CrabStack.",
    url: "https://www.carlw.se",
    images: ["/images/remoet-home.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#0d060b" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // The inline script and Motion.tsx change <html> attributes before hydration on purpose.
    <html lang="en" className={jost.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            // Hide reveal targets only while the bundle can show them again: if
            // Motion.tsx has not started within 3s (bundle failed), show everything.
            __html:
              "var d=document.documentElement;d.classList.add('js');setTimeout(function(){if(!d.hasAttribute('data-motion'))d.classList.remove('js')},3000)",
          }}
        />
      </head>
      <body>
        {children}
        <Motion />
      </body>
    </html>
  );
}
