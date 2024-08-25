import {ModuleMetadata, Type} from '@nestjs/common';
import {DrizzleConfig} from 'drizzle-orm';
import {MigrationConfig} from 'drizzle-orm/migrator';
import {NodePgDatabase} from 'drizzle-orm/node-postgres';

export type PostgresJsDb = NodePgDatabase;

export interface DrizzleOptions {
  driver: 'postgres-js';
  url: string;
  options?: DrizzleConfig<Record<string, unknown>>;
  migrationOptions?: MigrationConfig;
}

export interface DrizzleOptionsFactory {
  createDrizzleOptions(): Promise<DrizzleOptions> | DrizzleOptions;
}

export interface DrizzleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  inject?: any[];
  useExisting?: Type<DrizzleOptionsFactory>;
  useClass?: Type<DrizzleOptionsFactory>;
  useFactory?: (
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ...args: any[]
  ) => Promise<DrizzleOptions> | DrizzleOptions;
}
