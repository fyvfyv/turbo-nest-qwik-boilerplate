import {pgTable, serial, varchar} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: varchar('name', {length: 16}),
});
