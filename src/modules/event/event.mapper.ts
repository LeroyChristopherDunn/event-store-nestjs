import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Event } from './entities/event.entity';
import { EntityRepository } from '@mikro-orm/knex';
import { EventCreateDto } from './dto/event-create.dto';
import { EventUpdateDto } from './dto/event-update.dto';
import { EventQueryDto } from './dto/event-query.dto';
import { FilterQuery } from '@mikro-orm/core';

@Injectable()
export class EventMapper {
  constructor(
    @InjectRepository(Event)
    private readonly repository: EntityRepository<Event>,
  ) {}

  fromCreateDto(dto: EventCreateDto): Event {
    return this.entityFromDto(dto);
  }

  async fromUpdateDto(id: number, dto: EventUpdateDto): Promise<Event | null> {
    const role = await this.repository.findOne(
      { id },
      { disableIdentityMap: true, refresh: true },
    );
    if (!role) return role;
    const mappedDto = this.entityFromDto(dto);
    return this.repository.assign(role, mappedDto);
  }

  entityFromDto(dto: EventCreateDto | EventUpdateDto) {
    return Object.assign(new Event(), dto);
  }

  filtersFromQueryDto(query: EventQueryDto) {
    const idsIn: FilterQuery<Event> = query.ids?.length && {
      id: { $in: query.ids },
    };
    const aggregate: FilterQuery<Event> = query.aggregate && {
      aggregate: query.aggregate,
    };
    const type: FilterQuery<Event> = query.type && {
      type: query.type,
    };
    const typeLike: FilterQuery<Event> = query.typeLike && {
      type: { $like: '%' + query.typeLike + '%' },
    };
    const createdBefore: FilterQuery<Event> = query.createdBefore && {
      createdDate: { $lt: query.createdBefore },
    };
    const createdAfter: FilterQuery<Event> = query.createdAfter && {
      createdDate: { $gte: query.createdAfter },
    };
    return [
      idsIn,
      aggregate,
      type,
      typeLike,
      createdBefore,
      createdAfter,
    ].filter((filter) => !!filter);
  }
}
