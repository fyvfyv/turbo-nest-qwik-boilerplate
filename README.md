# Turborepo NestJS + QwikCity

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `@tnq/backend`: NestJS basic app with DrizzleORM
- `@tnq/client`: Qwik City basic app
- `@tnq/types`: Shared types between `@tnq/backend` and `@tnq/client`

Each package/app is [TypeScript](https://www.typescriptlang.org/).

### Utilities

This repo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev/) for code linting and formatting (except of `@tnq/client`)
- [ESLint](https://eslint.org/) for code linting (only for `@tnq/client`)
- [Prettier](https://prettier.io) for code formatting (only for `@tnq/client`)
- [DrizzleORM](https://drizzle.dev/) for database ORM
- [PostgreSQL](https://www.postgresql.org/) for database

ESLint and Prettier are used until [Qwik adds support for Biome](https://github.com/QwikDev/qwik/issues/6648).

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Prepare for Development

Install [pnpm](https://pnpm.io/) globally and install dependencies:

```
npm install -g pnpm
pnpm install
```

Prepare the environment variables:

```
cp apps/backend/.env.example apps/backend/.env
```

Prepare docker-compose.yaml with the actual database credentials and run the container:

```
docker-compose up -d
```

### Migrations

To run migrations in `@tnq/backend`, run the following command:

```
pnpm run db:migration:run
```

To generate a new migration in `@tnq/backend`, run the following command:

```
pnpm run db:migration:generate
```

Also, DrizzleORM provides [Studio](https://orm.drizzle.team/drizzle-studio/overview) for database management. 
To run Studio, run the following command:

```
pnpm run db:studio
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
