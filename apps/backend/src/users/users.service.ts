import {Inject, Injectable} from '@nestjs/common';
import {PostgresJsDatabase} from 'drizzle-orm/postgres-js';
import {DRIZZLE_ORM} from '../const.js';
import * as schema from '../drizzle/schema.js';

@Injectable()
export class UsersService {
  constructor(@Inject(DRIZZLE_ORM) private repository: PostgresJsDatabase<typeof schema>) {}

  async findAll() {
    return this.repository.query.users.findMany();
  }
}
