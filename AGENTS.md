# AGENTS.md — ParioCity Website

## Project Identity

This repository contains the static website for **ParioCity** and product landing pages for **POD Margin Lens**.

This is not the POD Margin Lens Chrome Extension source repository.

## Hard Boundaries

- Do not add analytics.
- Do not add tracking.
- Do not add payment.
- Do not add login.
- Do not add external APIs.
- Do not add cookies unless absolutely necessary.
- Do not purchase domains.
- Do not handle credit card information.
- Do not modify Chrome Extension source code from this repository.

## Technical Direction

Keep the site static and easy to deploy.

Allowed:

- Static HTML
- Static CSS
- Small local build/check scripts using Node standard library

Avoid:

- Databases
- Authentication
- Client-side app frameworks unless clearly needed
- External scripts
- Embedded third-party widgets

## Copy Rules

Keep copy safe and non-promissory.

Use:

- estimate
- compare
- rank
- support decision-making

Avoid:

- guaranteed profit
- winning products
- make money automatically
- beat the algorithm
- guaranteed ad success

## Deployment Target

Use Cloudflare Pages first:

```txt
https://pariocity.pages.dev
```

Do not assume `pariocity.com` has been purchased.
