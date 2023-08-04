import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode, { LineElement } from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "github-dark-dimmed",
  onVisitLine(node: LineElement) {
    // Prevent lines from collapsing in `display: grid` mode, and allow empty
    // lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: LineElement) {
    node.properties.className?.push("line--highlighted");
  },
  onVisitHighlightedWord(node: LineElement) {
    node.properties.className = ["word--highlighted"];
  },
};

export const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (article) => article._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/content",
  documentTypes: [Article],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});
