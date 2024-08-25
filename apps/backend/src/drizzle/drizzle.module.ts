import {DynamicModule, Global, Module, Provider} from '@nestjs/common';
import {DRIZZLE_OPTIONS} from '../const.js';
import {connectionFactory, createDrizzleProviders} from './drizzle.provider.js';
import {DrizzleService} from './drizzle.service.js';
import {DrizzleAsyncOptions, DrizzleOptions, DrizzleOptionsFactory} from './types.js';

@Global()
@Module({
  providers: [DrizzleService, connectionFactory],
  exports: [DrizzleService, connectionFactory],
})
export class DrizzleModule {
  public static register(options: DrizzleOptions): DynamicModule {
    return {
      module: DrizzleModule,
      providers: createDrizzleProviders(options),
    };
  }

  public static registerAsync(options: DrizzleAsyncOptions): DynamicModule {
    return {
      module: DrizzleModule,
      providers: [...this.createProviders(options)],
    };
  }

  public static forRoot(options: DrizzleOptions): DynamicModule {
    const providers = createDrizzleProviders(options);
    return {
      module: DrizzleModule,
      providers: providers,
      exports: providers,
    };
  }

  public static forRootAsync(options: DrizzleAsyncOptions): DynamicModule {
    return {
      module: DrizzleModule,
      providers: [...this.createProviders(options)],
      exports: [...this.createProviders(options)],
    };
  }

  private static createProviders(options: DrizzleAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createOptionsProvider(options)];
    }

    return [
      this.createOptionsProvider(options),
      {
        provide: options.useClass,
        useClass: options.useClass,
      },
    ];
  }

  private static createOptionsProvider(options: DrizzleAsyncOptions): Provider {
    if (options.useFactory) {
      return {
        provide: DRIZZLE_OPTIONS,
        useFactory: options.useFactory,
        inject: options.inject || [],
      };
    }

    return {
      provide: DRIZZLE_OPTIONS,
      useFactory: async (optionsFactory: DrizzleOptionsFactory) => await optionsFactory.createDrizzleOptions(),
      inject: [options.useExisting || options.useClass],
    };
  }
}
