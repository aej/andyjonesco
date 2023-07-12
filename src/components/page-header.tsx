import { cn } from "@/lib/utils";

export default function PageHeader(props: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mt-10">
      <h1
        className={cn(
          "text-2xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
        )}
      >
        {props.title}
      </h1>
      {props.subtitle && (
        <p className={cn("text-lg text-muted-foreground sm:text-xl")}>
          {props.subtitle}
        </p>
      )}
    </div>
  );
}
