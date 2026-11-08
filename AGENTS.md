# Andy Jones website agent instructions

## Purpose and scope

Maintain and improve [andyjones.co](https://andyjones.co/) in the `aej/andyjonesco`
repository. Preserve unrelated user changes, existing routes, article content,
metadata, local assets, SEO behaviour, and the Vercel rollback path until a
Cloudflare release is proven stable.

The canonical checkout on the OpenClaw host is `/home/openclaw/projects/andyjonesco`.

## Architecture

- Next.js 13 App Router application migrated to vinext/Vite.
- Cloudflare Workers with Workers Static Assets; build-time prerendering is enabled.
- Contentlayer/MDX articles remain in `src/content/`.
- Worker name: `andy-website`.
- Production domains: `andyjones.co` and `www.andyjones.co`; `www` must redirect to apex.

## Git and deployment workflow

1. Inspect `git remote -v`, branch, and working tree before editing. Preserve
   unrelated changes and never stage them silently.
2. Work on `agent/<short-description>` branches from current `main`.
3. Run the validation commands below, commit explicit files, push, and open a PR.
4. Prefer Cloudflare Workers Builds for previews and production. If unavailable,
   use a minimal GitHub Actions workflow with `CLOUDFLARE_API_TOKEN` referenced
   only as a GitHub secret name.
5. Do not merge or cut DNS over until preview, production, both domains, HTTPS,
   representative pages/assets/metadata, redirects, and the exact commit are
   verified. Do not disable Vercel before that point.

## Required validation

```sh
npm ci --legacy-peer-deps
npm run lint
npm run build
npx cf workers types
npx cf deploy --dry-run
git diff --check
```

A local build or dry run does not prove a remote deployment. Verify homepage,
`/work`, `/articles`, one article slug, assets, metadata, a missing route, apex
HTTPS, and the `www` redirect after deployment.

## Generated files, secrets, and rollback

Do not commit `node_modules/`, `dist/`, `.cloudflare/`, `.vinext/`, `.contentlayer/`,
`.next/`, local env files, or generated type output. Never place API tokens, OAuth
credentials, deployment secrets, or secret values in source, logs, PRs, or docs.
Do not change unrelated DNS, mail records, Cloudflare resources, or production
secrets. Keep the current Vercel A/CNAME records documented until production is
confirmed. Roll back by restoring those records or the last known-good Worker
version after checking compatibility.
