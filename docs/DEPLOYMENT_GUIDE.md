# Deployment Guide

## Recommended Host

Use Cloudflare Pages free hosting for the first release.

Expected URL:

```txt
https://pariocity.pages.dev
```

## GitHub Integration Steps

1. Push this repository to GitHub.
2. Open Cloudflare Dashboard.
3. Go to **Workers & Pages**.
4. Select **Create application**.
5. Select **Pages**.
6. Choose **Connect to Git**.
7. Select the GitHub repository:

```txt
ryuusuraimu/ParioCity
```

8. Configure the Pages project.

## Cloudflare Pages Settings

Project name:

```txt
pariocity
```

Production branch:

```txt
main
```

Build command:

```bash
npm run build
```

Build output directory:

```txt
dist
```

Root directory:

```txt
/
```

Environment variables:

```txt
none
```

## Deploy

After saving the settings, Cloudflare Pages should install the project, run the build command, and publish `dist/`.

## Post-Deploy Checks

Open these URLs:

- `https://pariocity.pages.dev/`
- `https://pariocity.pages.dev/products/`
- `https://pariocity.pages.dev/pod-margin-lens/`
- `https://pariocity.pages.dev/pod-margin-lens/privacy/`
- `https://pariocity.pages.dev/pod-margin-lens/support/`
- `https://pariocity.pages.dev/pod-margin-lens/roadmap/`

Confirm:

- Navigation works.
- No analytics scripts are present.
- No tracking scripts are present.
- No login or payment flow is present.
- No external API is needed to render the site.

## Manual Upload Alternative

If GitHub integration is not ready:

1. Run:

```bash
npm run build
```

2. Upload the `dist/` directory to Cloudflare Pages by direct upload.

## Chrome Web Store Update

After deployment, use these URLs in Chrome Web Store fields:

- Homepage: `https://pariocity.pages.dev/pod-margin-lens/`
- Privacy Policy: `https://pariocity.pages.dev/pod-margin-lens/privacy/`
- Support: `https://pariocity.pages.dev/pod-margin-lens/support/`

Do not add tracking parameters to Chrome Web Store URLs.
