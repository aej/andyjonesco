import NavLink from "@/components/nav-link";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andy Jones",
  description: "Andy Jones personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="4ebc0745-db43-4ae9-9323-15fdb4d9c96d"
          async
        />
        <Script
          src="https://app.saasbanner.com/static/banner.js"
          strategy="beforeInteractive"
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="p-4 max-w-3xl mx-auto">
            <div className="mt-5 md:mt-10 flex justify-between">
              <ul className="flex items-center space-x-4">
                <li>
                  <NavLink text="home" href="/" />
                </li>
                <li>
                  <NavLink text="work" href="/work" />
                </li>
                <li>
                  <NavLink text="articles" href="/articles" />
                </li>
              </ul>
              <ModeToggle />
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
