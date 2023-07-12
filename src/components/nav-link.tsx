"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(props: {
  text: string;
  href: string;
}): React.ReactNode {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      className={cn(
        isActive && "text-foreground",
        !isActive &&
          "transition-colors hover:text-foreground text-foreground/60"
      )}
      href={props.href}
    >
      {props.text}
    </Link>
  );
}
