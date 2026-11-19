import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.carlw.se"),
  title: "Igelström, Carl",
  description:
    "Igelström, Carl is a one-person software company in Sweden behind Remoet and CrabStack.",
  openGraph: {
    title: "Igelström, Carl",
    description: "A one-person software company in Sweden, behind Remoet and CrabStack.",
    url: "https://www.carlw.se",
    images: ["/images/remoet-home.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
