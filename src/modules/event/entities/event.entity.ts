import { Entity, Index, PrimaryKey, Property } from '@mikro-orm/core';

export enum EventProjection {}

export const SUMMARY_PROJECTION: EventProjection[] = [];

export const DEFAULT_PROJECTION: EventProjection[] = [];

@Entity()
export class Event {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Index()
  @Property({ onCreate: () => new Date() })
  createdDate: Date;

  @Index()
  @Property()
  version: number;

  @Property()
  @Index()
  aggregate: string;

  @Property()
  @Index()
  type: string;

  @Property({ type: 'json' })
  payload: any;
}
