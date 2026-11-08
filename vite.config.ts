import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";

const mdxPlugin = mdx({
  include: /\.mdx$/,
  remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
});
mdxPlugin.enforce = "pre";

export default defineConfig({
  plugins: [
    mdxPlugin,
    vinext({
      cache: { cdn: staticAssetsAdapter() },
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
