# @gapcm/cli

[![npm version](https://img.shields.io/npm/v/@gapcm/cli.svg)](https://www.npmjs.com/package/@gapcm/cli)
[![GitHub repo](https://img.shields.io/badge/GitHub-nam--rgba%2Fgapcm-181717?logo=github)](https://github.com/nam-rgba/gapcm.git)

`@gapcm/cli` is the public CLI package for the GAPCM ecosystem. It is the starting point for a larger full-stack framework that aims to support both backend and frontend development from one shared toolchain.

It starts with CLI-based scaffolding for API modules, and is designed to grow into a broader ecosystem that can later include UI generation, shared patterns, and framework-level tooling for both BE and FE.

Repository: [nam-rgba/gapcm](https://github.com/nam-rgba/gapcm.git)

## What it does today

- Generates backend module files from EJS templates.
- Keeps entity, repository, service, controller, and route names aligned with the module name.
- Exposes a single CLI entry point: `gapcm`.

## Install

```powershell
npm install -g @gapcm/cli
```

## Usage

Generate a module:

```powershell
gapcm add sample
```

Short alias:

```powershell
gapcm g sample
```

Run the command from your target project folder so files are created in the correct app structure.

## Generated files

For a module named `sample`, the CLI creates:

- `src/entities/sample.entity.ts`
- `src/repository/sample.repository.ts`
- `src/services/sample.service.ts`
- `src/controllers/sample.controller.ts`
- `src/routes/sample.admin.ts`

## Example

```powershell
cd app/api
gapcm add user-profile
```

This generates `UserProfile`-based class names and `userProfile`-based file names.

## Roadmap

`gapcm` is intended to evolve beyond API scaffolding into a broader framework that can support:

- shared backend conventions
- frontend scaffolding and UI generation
- reusable patterns across the full stack
- tooling that keeps BE and FE development aligned

## Notes

- The package publishes `dist` and `templates`.
- The CLI entry point is `gapcm`.
- The package is published publicly on npm.