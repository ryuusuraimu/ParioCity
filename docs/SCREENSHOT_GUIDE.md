# Chrome Web Store Screenshot Guide

These hidden utility pages create 1280x800 compositions for POD Margin Lens v0.1 Chrome Web Store screenshots.

They are not linked from normal site navigation.

## Preview URLs

Local preview:

```txt
http://127.0.0.1:4321/pod-margin-lens/screenshots/empty-state/
http://127.0.0.1:4321/pod-margin-lens/screenshots/ranking/
http://127.0.0.1:4321/pod-margin-lens/screenshots/metrics/
```

Cloudflare Pages preview after deploy:

```txt
https://pariocity.pages.dev/pod-margin-lens/screenshots/empty-state/
https://pariocity.pages.dev/pod-margin-lens/screenshots/ranking/
https://pariocity.pages.dev/pod-margin-lens/screenshots/metrics/
```

## Capture Size

Use a viewport of exactly:

```txt
1280x800
```

## Manual Capture

1. Run:

```bash
npm run dev
```

2. Open each screenshot URL in a browser.
3. Set the browser or capture tool viewport to `1280x800`.
4. Capture the visible viewport only, not the full page.

## Playwright Capture Example

```bash
node -e "const { chromium } = require('playwright'); (async () => { const browser = await chromium.launch(); const page = await browser.newPage({ viewport: { width: 1280, height: 800 } }); for (const name of ['empty-state','ranking','metrics']) { await page.goto('http://127.0.0.1:4321/pod-margin-lens/screenshots/' + name + '/'); await page.screenshot({ path: name + '.png' }); } await browser.close(); })();"
```

## Copy Rules

- Do not show v0.2 export features.
- Do not show CSV export, Markdown export, Copy Markdown, Obsidian sync, Pro, or paid plan.
- Do not promise profit.
- Do not claim guaranteed ad success.
- Use safe wording such as estimate, compare, rank, and decision support.

## Included Screenshots

1. `empty-state`: add product form, 0 products state, local-only / no login / no API note.
2. `ranking`: Strong Tee, Zen Fox Tee, Risky Tee, and Loss Tee ranking cards.
3. `metrics`: enlarged result card with break-even CPA, post-ad profit, ad safety, and cost + shipping.
