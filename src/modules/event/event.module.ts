import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Event } from './entities/event.entity';
import { EventService } from './event.service';
import { EventMapper } from './event.mapper';

@Module({
  imports: [MikroOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService, EventMapper],
  exports: [EventService, EventMapper],
})
export class EventModule {}
