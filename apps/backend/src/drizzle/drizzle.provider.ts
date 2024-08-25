import {PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {DRIZZLE_OPTIONS, DRIZZLE_ORM} from '../const.js';
import {DrizzleService} from './drizzle.service.js';
import {DrizzleOptions} from './types.js';

export const connectionFactory = {
  provide: DRIZZLE_ORM,
  useFactory: async (nestDrizzleService: {
    getDrizzle: () => Promise<PostgresJsDatabase>;
  }) => {
    return nestDrizzleService.getDrizzle();
  },
  inject: [DrizzleService],
};

export function createDrizzleProviders(options: DrizzleOptions) {
  return [
    {
      provide: DRIZZLE_OPTIONS,
      useValue: options,
    },
  ];
}
