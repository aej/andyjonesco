import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andy Jones",
  description: "Andy Jones personal website",
};

function NavLink(props: {
  text: string;
  isActive: boolean;
  href: string;
}): React.ReactNode {
  return (
    <Link
      className={cn(
        props.isActive && "text-foreground",
        !props.isActive &&
          "transition-colors hover:text-foreground text-foreground/60"
      )}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 max-w-3xl mx-auto">
          <div className="mt-5 md:mt-10">
            <ul className="flex items-center space-x-4">
              <li>
                <NavLink text="home" href="/" isActive={true} />
              </li>
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
