# andyjones.co

Personal website for Andy Jones: work history, profile, and MDX technical
articles. The app uses the Next.js App Router API through vinext and deploys to
Cloudflare Workers.

## Local development

```sh
npm ci --legacy-peer-deps
npm run dev
```

Open <http://localhost:3001>. Contentlayer generates article metadata and the
Vite MDX plugin compiles article modules at build time so the Worker does not
evaluate MDX source at runtime.

## Validation

```sh
npm run lint
npm run build
npx cf deploy --dry-run
git diff --check
```

The Cloudflare dry run validates the Worker Build Output and asset package; it
does not deploy or change DNS.

## Deployment

See [docs/deployment.md](docs/deployment.md) and [AGENTS.md](AGENTS.md) for the
branch/PR workflow, Cloudflare Workers Builds setup, preview and production
verification, DNS cutover, rollback, generated-file rules, and secret handling.

The production domains are intended to be `andyjones.co` and
`www.andyjones.co` (redirecting to the apex). Vercel remains the rollback
origin until the Cloudflare deployment and both domains are proven live.
