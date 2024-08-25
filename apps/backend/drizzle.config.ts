import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dbCredentials: {
    url: process.env.PSQL_CONN_URL,
  },
  verbose: true,
  strict: true,
});
