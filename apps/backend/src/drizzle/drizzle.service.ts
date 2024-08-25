import {Inject, Injectable, Logger} from '@nestjs/common';
import {PostgresJsDatabase, drizzle as drizzlePgJs} from 'drizzle-orm/postgres-js';
import {migrate as migratePgJs} from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import {DRIZZLE_OPTIONS} from '../const.js';
import {DrizzleOptions} from './types.js';

interface IDrizzleService {
  migrate(): Promise<void>;
  getDrizzle(): Promise<PostgresJsDatabase>;
}

@Injectable()
export class DrizzleService implements IDrizzleService {
  private _drizzle: PostgresJsDatabase<Record<string, unknown>>;

  constructor(
    @Inject(DRIZZLE_OPTIONS)
    private _NestDrizzleOptions: DrizzleOptions,
  ) {}

  private logger = new Logger('DrizzleService');

  async migrate() {
    const client = postgres(this._NestDrizzleOptions.url, {max: 1});
    await migratePgJs(drizzlePgJs(client), this._NestDrizzleOptions.migrationOptions);
  }

  async getDrizzle() {
    let client: postgres.Sql<Record<string, never>>;

    if (!this._drizzle) {
      client = postgres(this._NestDrizzleOptions.url);
      try {
        await client`SELECT 1`;
        this.logger.log('Database connected successfully');
      } catch (error) {
        this.logger.error('Database connection error', error);
        throw error;
      }
      this._drizzle = drizzlePgJs(client, this._NestDrizzleOptions.options);
    }

    return this._drizzle as PostgresJsDatabase;
  }
}
