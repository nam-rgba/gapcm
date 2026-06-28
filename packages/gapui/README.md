# @gapcm/gapui

CLI generator for the `gapcm` monorepo.

## What it does

This package generates CRUD-style files from EJS templates for an API module:

- `entity`
- `repository`
- `service`
- `controller`
- `route`

It is published as a CLI command named `gapcm`.

## Install

### Local test from the monorepo

From `app/api`:

```powershell
pnpm exec gapcm add sample
```

### Global install from npm

```powershell
npm install -g @gapcm/gapui
```

## Usage

Generate a module named `sample`:

```powershell
gapcm add sample
```

Short alias:

```powershell
gapcm g sample
```

## Output

The generator writes files into the current project structure:

- `src/entities/<name>.entity.ts`
- `src/repository/<name>.repository.ts`
- `src/services/<name>.service.ts`
- `src/controllers/<name>.controller.ts`
- `src/routes/<name>.admin.ts`

## Build

```powershell
pnpm -C packages/gapui run build
```

## Publish

```powershell
cd packages/gapui
npm login
npm publish --access public
```

## Notes

- The package publishes `dist` and `templates`.
- The CLI expects to be run from the target project folder, for example `app/api`.