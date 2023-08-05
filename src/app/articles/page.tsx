import PageHeader from "@/components/page-header";
import { allArticles } from "contentlayer/generated";

type ArticleProps = {
  title: string;
  subtitle: string;
  href: string;
};

const sortedArticles = allArticles.sort((a, b) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
});

function Article(props: ArticleProps) {
  return (
    <div className="space-y-2">
      <a
        href={props.href}
        className="hover:underline transition-colors hover:text-foreground text-foreground text-xl"
      >
        {props.title}
      </a>
      <p className="text-foreground/60">{props.subtitle}</p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <PageHeader title="Articles" />
      <div className="mt-16 space-y-10">
        {sortedArticles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            subtitle={article.summary}
            href={`/articles/${article.slug}`}
          />
        ))}
      </div>
    </>
  );
}
