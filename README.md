# Personal Finance Platform

A self-hosted wealth tracking and portfolio analytics platform prepared as a white-label public snapshot.

## Features

- Portfolio and account tracking
- Performance analytics dashboards
- Self-hosted API and web client
- Database migrations and seed workflows
- Docker-oriented deployment assets

## Tech stack

- Angular
- NestJS
- Nx
- Prisma
- PostgreSQL
- TypeScript

## Screenshots

Screenshots are not included in this repository snapshot. Run the app locally and add current product screenshots when a deployment is available.

## Installation

Use the package manager indicated by the lockfile in this repository. Install from the repository root before running app-specific commands.

## Environment variables

Create local environment files from the example files included in the repository, or start from this root example:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Configure for the local or deployed environment. |
| `JWT_SECRET_KEY` | Configure for the local or deployed environment. |
| `ACCESS_TOKEN_SALT` | Configure for the local or deployed environment. |
| `POSTGRES_DB` | Configure for the local or deployed environment. |
| `POSTGRES_USER` | Configure for the local or deployed environment. |
| `POSTGRES_PASSWORD` | Configure for the local or deployed environment. |

## Development commands

```bash
npm install
```
```bash
npm run start:server
```
```bash
npm run start:client
```
```bash
npm run build:production
```
```bash
npm test
```

## Build and deploy notes

- Review the included Docker, compose, or package-specific deployment files before production use.
- Keep secrets outside git and provide them through the deployment platform or local untracked environment files.
- For large workspace builds, run package-specific checks first, then the root build command.

## Project structure

- `.config/` — project directory
- `.husky/` — project directory
- `apps/` — project directory
- `docker/` — project directory
- `Dockerfile`
- `libs/` — project directory
- `LICENSE`
- `NOTICE.md`
- `package.json`
- `prisma/` — project directory
- `test/` — project directory
- `tools/` — project directory

## Verification status

This public snapshot was prepared with dependency directories, generated output, local editor settings, and private environment files removed. See `PUBLISHING_REPORT.md` for the exact safety and verification checks run before publication.

## License

AGPL-3.0. Preserve the included license and notice files when redistributing.

## Author

gotowebevents <info@gotowebevents.com>
