# gapcm

Simple monorepo for a full-stack app with two parts:

- `app/api`: Express + TypeScript backend
- `app/ui`: React + Vite frontend

## Prerequisites

- Node.js 20+
- pnpm 11+
- PostgreSQL for the API

## Install

```bash
pnpm install
```

## Run the apps

API:

```bash
pnpm --dir app/api dev
```

UI:

```bash
pnpm --dir app/ui dev
```

## Project Structure

```text
app/
	api/   Backend server and database logic
	ui/    Frontend app and pages
packages/
	gapui/ Shared package placeholder
```

## Notes

- The root package is currently minimal.
- Add environment variables and database connection settings in the API app before running it.
