# ParioCity

ParioCity is an umbrella brand for small browser tools that support sharper solo-business decisions.

The first product is **POD Margin Lens**, a lightweight local-only Chrome Extension that helps POD sellers compare break-even CPA, post-ad profit, and ad safety before spending money on ads.

## Local Development

```bash
npm run dev
```

Open:

```txt
http://127.0.0.1:4321
```

## Build

```bash
npm run build
```

Build output:

```txt
dist/
```

## Checks

```bash
npm run check
npm run lint
npm run test
```

The check script verifies required routes, known internal links, and absence of common analytics, tracking, and payment scripts.

## Cloudflare Pages Settings

Project name:

```txt
pariocity
```

Build command:

```bash
npm run build
```

Build output directory:

```txt
dist
```

Expected first URL:

```txt
https://pariocity.pages.dev
```

Future custom domain:

```txt
https://pariocity.com
```

Do not assume `pariocity.com` has been purchased yet.

## Project Structure

```txt
public/
  index.html
  products/
  pod-margin-lens/
    index.html
    privacy/
    support/
    roadmap/
  assets/
    styles.css
scripts/
  build.mjs
  check-site.mjs
docs/
  DEPLOYMENT_GUIDE.md
  CHROME_WEB_STORE_URLS.md
  FUTURE_CUSTOM_DOMAIN_MIGRATION.md
```

## Boundaries

- No analytics
- No tracking
- No login
- No payment
- No cookies unless absolutely necessary
- No external APIs
- No Chrome Extension source code in this repository
