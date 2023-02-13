import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

export enum EventProjection {}

export const SUMMARY_PROJECTION: EventProjection[] = [];

export const DEFAULT_PROJECTION: EventProjection[] = [];

@Entity()
export class Event {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property({ onCreate: () => new Date() })
  createdDate: Date;

  @Property()
  version: number;

  @Property()
  aggregate: string;

  @Property()
  type: string;

  @Property({ type: 'json' })
  payload: any;
}
