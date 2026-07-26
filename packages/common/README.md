# @gapcm/common

[![GitHub repo](https://img.shields.io/badge/GitHub-nam--rgba%2Fgapcm-181717?logo=github)](https://github.com/nam-rgba/gapcm.git)

`@gapcm/common` is a shared UI utility package for the GAPCM ecosystem. It provides reusable building blocks for frontend development, including React components, hooks, and utility functions that can be used across multiple applications.

This package is designed to help teams keep UI logic consistent, reduce duplication, and speed up development with a common set of primitives.

## What it includes

- Reusable React components
- Custom hooks for common UI behaviors
- Shared utility functions for formatting, helpers, and app logic
- A simple foundation for building consistent frontend experiences

## Install

```bash
npm install @gapcm/common
```

## Usage

```ts
import {} from /* component or hook */ "@gapcm/common";
```

You can use the exported helpers directly in your React application or extend them for your own UI modules.

## Development

```bash
pnpm install
pnpm --filter @gapcm/common build
pnpm --filter @gapcm/common test
```

## Notes

- This package is focused on shared frontend utilities.
- It is intended to be consumed by GAPCM-based UI projects.
- The package is published as a reusable common library for React and UI development.
