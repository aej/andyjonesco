# Andy Jones website deployment runbook

## Local development and build

```sh
npm ci --legacy-peer-deps
npm run dev
npm run lint
npm run build
npx cf deploy --dry-run
```

The app runs on port 3001 under vinext. Contentlayer generates the MDX article
data during install/build. The Cloudflare target is a Workers request handler
with Workers Static Assets and build-time prerendering; this is not an assumed
static export.

## Git workflow

Use a focused `agent/<description>` branch, push it, and open a PR into `main`.
Cloudflare Workers Builds should deploy branch previews and `main` to production.
If Workers Builds is unavailable, a minimal GitHub Actions workflow may deploy
with the GitHub secret named `CLOUDFLARE_API_TOKEN`; its value must never appear
in logs or commits. Record the exact PR/merge SHA, Cloudflare build URL, Worker
version ID, and smoke checks in the PR.

## Domains and DNS

The Cloudflare zone is `andyjones.co`. The intended Worker custom domains are
`andyjones.co` and `www.andyjones.co`, with `www` redirecting to the apex.
Existing mail, DKIM, SPF, DMARC, and other verification records are out of scope.

Do not change the Vercel DNS records until preview and production are proven live.
The cutover should replace only the apex Vercel A record and `www` Vercel CNAME;
verify exact record IDs and values first and record the old values for rollback.

## Production verification and rollback

Check HTTPS 200 for `/`, `/work`, `/articles`, and both MDX article slugs; verify
local images, favicon, metadata, canonical URL, article headings, and a missing
route. Verify `www` redirects to the apex and record the deployed commit/version.

Before cutover, rollback is leaving Vercel DNS unchanged. After cutover, restore
only the recorded apex Vercel A and `www` Vercel CNAME if needed. Keep the Worker
and repository intact for diagnosis.
