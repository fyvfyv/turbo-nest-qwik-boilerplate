# Turborepo NestJS + QwikCity

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `@tnq/backend`: NestJS basic app
- `@tnq/client`: QwikCity basic app
- `@tnq/types`: Shared types between `@tnq/backend` and `@tnq/client`

Each package/app is [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting (except of `@tnq/client`)
- [ESLint](https://eslint.org/) for code linting (only for `@tnq/client`)
- [Prettier](https://prettier.io) for code formatting (only for `@tnq/client`)

ESLint and Prettier are used until [QwikCity supports Biome](https://github.com/QwikDev/qwik/issues/6648).

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Lint and Format

To lint all apps and packages, run the following command:

```
pnpm lint
```

To auto-format all apps and packages, run the following command:

```
pnpm format
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
