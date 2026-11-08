import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#05070e",
};

export const metadata: Metadata = {
  title: "Andy Jones",
  description: "Andy Jones. Get in touch: contact@andyjones.co.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="site-content">{children}</main>
      </body>
    </html>
  );
}
