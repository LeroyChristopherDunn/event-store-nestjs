import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs/typings';
import * as process from 'process';

const BASE_CONFIG: MikroOrmModuleSyncOptions = {
  forceUtcTimezone: true,
  entities: ['./dist/modules/**/*.entity.js'],
  entitiesTs: ['./src/modules/**/*.entity.ts'],
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
};

export const MIKRO_ORM_CONFIG: MikroOrmModuleSyncOptions = {
  ...BASE_CONFIG,
  type: (process.env.EVENT_STORE_MIKRO_ORM_TYPE as any) || 'sqlite',
  dbName: (process.env.EVENT_STORE_MIKRO_ORM_DB_NAME as any) || ':memory:',
  user: (process.env.EVENT_STORE_MIKRO_ORM_USER as any) || '',
  password: (process.env.EVENT_STORE_MIKRO_ORM_PASSWORD as any) || '',
  debug: (process.env.EVENT_STORE_MIKRO_ORM_DEBUG as any) || true,
};

export const MICRO_ORM_TEST_CONFIG: MikroOrmModuleSyncOptions = {
  ...BASE_CONFIG,
  type: (process.env.TEST_MIKRO_ORM_TYPE as any) || 'sqlite',
  dbName: (process.env.TEST_MIKRO_ORM_DB_NAME as any) || ':memory:',
  user: (process.env.TEST_MIKRO_ORM_USER as any) || '',
  password: (process.env.TEST_MIKRO_ORM_PASSWORD as any) || '',
  debug: (process.env.TEST_MIKRO_ORM_DEBUG as any) || true,
  allowGlobalContext: true,
};
