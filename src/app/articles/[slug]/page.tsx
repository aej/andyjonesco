import { Mdx } from "@/components/mdx";
import PageHeader from "@/components/page-header";
import { allArticles } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default function Article(props: { params: { slug: string } }) {
  const article = allArticles.find(
    (article) => article.slug === props.params.slug
  );

  if (!article) {
    return notFound();
  }

  return (
    <section>
      <PageHeader title={article.title} />
      <div className="mt-16 space-y-10">
        <Mdx code={article.body.code} />
      </div>
    </section>
  );
}
