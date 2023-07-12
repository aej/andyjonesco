import { cn } from "@/lib/utils";
import Image from "next/image";
import elixirLogo from "../../public/elixir-lang-icon.svg";
import typescriptLogo from "../../public/typescriptlang-icon.svg";
import pythonLogo from "../../public/python-icon.svg";
import me from "../../public/me.jpeg";
import { ArrowTopRightIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10 space-y-8">
      <div>
        <h1
          className={cn(
            "text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
          )}
        >
          Hi, I&apos;m Andy 👋
        </h1>
        <p className={cn("text-lg text-muted-foreground sm:text-xl")}>
          I&apos;m a software developer based in London, UK.
        </p>
      </div>

      <p className={cn("leading-7")}>
        With experience in both backend and frontend development, I have had the
        opportunity to work with various organizations, including startups,
        scale-ups, and agencies. I have also ventured into entrepreneurship,
        starting my own businesses.
      </p>

      <div className="flex justify-center">
        <Image alt="My best self" src={me} width={400} className="rounded-lg" />
      </div>

      <div className="mt-12 space-y-4 leading-7">
        <p>I have particular expertise in the following technologies:</p>

        <ul className="space-y-3">
          <li className="flex space-x-2 items-center">
            <Image alt="Python" src={pythonLogo} width={24} />{" "}
            <span>Python</span>
          </li>
          <li className="flex space-x-2 items-center">
            <Image alt="Typescript" src={typescriptLogo} width={24} />{" "}
            <span>Typescript</span>
          </li>
          <li className="flex space-x-2 items-center">
            <Image alt="Elixir" src={elixirLogo} width={24} />{" "}
            <span>Elixir</span>
          </li>
        </ul>
      </div>

      <div>
        <ul className="mt-20 text-foreground flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link
              target="_blank"
              href="https://twitter.com/andyjones11"
              className="flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60"
            >
              <ArrowTopRightIcon className="h-6 w-6" />
              <span>Follow me on Twitter</span>
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/andy-jones-111/"
              className="flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60"
            >
              <ArrowTopRightIcon className="h-6 w-6" />
              <span>Find me on LinkedIn</span>
            </Link>
          </li>
          <li>
            <Link
              href="mailto:contact@andyjones.co"
              className="flex items-center space-x-2 transition-colors hover:text-foreground text-foreground/60"
            >
              <EnvelopeClosedIcon className="h-6 w-5" />
              <span>Send me an email</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
