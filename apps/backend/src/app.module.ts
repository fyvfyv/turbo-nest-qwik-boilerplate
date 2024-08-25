import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {DrizzleModule} from './drizzle/drizzle.module.js';
import * as schema from './drizzle/schema.js';
import {UsersModule} from './users/users.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    UsersModule,
    DrizzleModule.forRootAsync({
      useFactory: () => {
        return {
          driver: 'postgres-js',
          url: process.env.PSQL_CONN_URL,
          options: {schema},
          migrationOptions: {migrationsFolder: './migration'},
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
