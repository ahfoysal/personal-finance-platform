# NOTICE — origin & licensing

Vault is a rebranded ("white-labeled") derivative of:

- **Ghostfolio** — https://github.com/ghostfolio/ghostfolio

The original `LICENSE` (AGPL-3.0) is retained.

## ⚠️ AGPL-3.0 — read before deploying

Ghostfolio is **AGPL-3.0**. Rebranding does not change the obligations:

- ✅ You may rebrand, modify, and self-host Vault.
- ✅ You must keep it under **AGPL-3.0** and keep the `LICENSE` file.
- ⚠️ If you run Vault as a network service, AGPL §13 requires you to **offer your users the
  complete corresponding source code** of your modified version. Keeping "credit" is not enough.
- ❌ You may not relicense it as closed-source/proprietary.

(Unlike Teable, Ghostfolio places **no extra trademark lock** on its brand — so rebranding the
app identity is permitted, provided you meet the AGPL source-disclosure duty above.)

## What was rebranded (core app identity)

- `apps/api/src/middlewares/html-template.middleware.ts` — `const title` (drives page title,
  og:title, twitter:title, og:site_name)
- `apps/client/src/app/app.component.ts` — mobile page-title fallback
- `apps/api/src/assets/site.webmanifest` — PWA name / short_name / description

**Not rebranded:** marketing/blog/changelog content contains many historical "Ghostfolio"
references (e.g. blog post titles, announcements). These aren't part of the core product UI; if
you ship the marketing pages, rewrite or remove that content. Also replace the favicon/touch-icon
assets in `apps/client/src/assets/`.
