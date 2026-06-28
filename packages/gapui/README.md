# @gapcm/gapui

`@gapcm/gapui` is a small CLI generator for scaffolding API modules from EJS templates.

## Features

- Generates `entity`, `repository`, `service`, `controller`, and `route` files.
- Uses your module name to render class names and file names consistently.
- Publishes a single CLI command: `gapcm`.

## Install

```powershell
npm install -g @gapcm/gapui
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

Run the command from the target API project folder so files are generated in the correct place.

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

This will generate files using `UserProfile` for class names and `userProfile` for file names.

## Publish notes

- The package ships `dist` and `templates`.
- The CLI entry point is `gapcm`.
- The package is designed to be published publicly on npm.