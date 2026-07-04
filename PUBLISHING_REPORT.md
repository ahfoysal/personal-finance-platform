# Publishing Report

- Source: `/Users/apple/Documents/Foysal/whitelabel/ghostfolio_wl`
- Repository name: `personal-finance-platform`
- Author/owner evidence: `gotowebevents <info@gotowebevents.com>`
- License: `AGPL-3.0`
- Sanitization: removed dependency directories, generated output, local editor/assistant settings, private environment files, credential configs, and docs containing forbidden publication wording.
- Verification: package metadata parsing, safety scans, git status checks, commit creation, push, and remote existence checks were run. Full dependency install/build/test was not run for the largest monorepo snapshots because the publication safety gate prioritized sanitization and remote verification.

## Removed docs with restricted publication wording

Some local assistant/provider-specific documents were excluded from the public snapshot.

## Review follow-up

Independent review blockers were addressed by removing exposed credentials, assistant/provider-specific publication wording, and leftover generated artifacts from the sanitized snapshots before rewriting the newly-created public repo history where needed.
