import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/knex';
import {
  DEFAULT_PROJECTION,
  Event,
  EventProjection,
} from './entities/event.entity';
import { EventCreateDto } from './dto/event-create.dto';
import { EventQueryDto } from './dto/event-query.dto';
import { EventUpdateDto } from './dto/event-update.dto';
import { EventMapper } from './event.mapper';
import { MikroOrmEntityService } from '../../mikro-orm-entity.service';

@Injectable()
export class EventService extends MikroOrmEntityService<
  Event,
  EventCreateDto,
  EventUpdateDto,
  EventQueryDto,
  EventProjection
> {
  constructor(
    mapper: EventMapper,
    @InjectRepository(Event)
    repository: EntityRepository<Event>,
  ) {
    super(mapper, repository, DEFAULT_PROJECTION);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: any, dto: EventUpdateDto): Promise<Event | null> {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateAll(dtos: (EventUpdateDto & { id: any })[]): Promise<void> {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove(id: any): Promise<number> {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removeAll(query: EventQueryDto): Promise<number> {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async upsert(dto: EventCreateDto & { id: any }): Promise<Event> {
    throw new Error('Unsupported operation');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async upsertAll(dtos: (EventCreateDto & { id: any })[]): Promise<void> {
    throw new Error('Unsupported operation');
  }
}
