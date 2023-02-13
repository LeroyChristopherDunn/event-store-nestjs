import { Logger } from '@nestjs/common';

const logger = new Logger('Config');

export type EnvironmentType = 'development' | 'test' | 'production';
export const ENVIRONMENT: EnvironmentType =
  (process.env.NODE_ENV as EnvironmentType) || 'development';
logger.log('ENVIRONMENT:', ENVIRONMENT);
