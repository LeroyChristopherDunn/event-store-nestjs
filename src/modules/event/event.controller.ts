import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { EventQueryDto } from './dto/event-query.dto';
import { EventService } from './event.service';
import { EventCreateDto } from './dto/event-create.dto';

@ApiBearerAuth()
@ApiTags('Event')
@Controller('event')
export class EventController {
  constructor(private readonly service: EventService) {}

  @Post()
  async create(@Body() createDto: EventCreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll(@Query() query: EventQueryDto) {
    return this.service.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const response = await this.service.find(id);
    if (!response) throw new NotFoundException();
    return response;
  }

  // @Patch(':id')
  // async update(@Param('id') id: number, @Body() updateDto: EventUpdateDto) {
  //   const response = await this.service.find(id);
  //   if (!response) throw new NotFoundException();
  //   return this.service.update(id, updateDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   return this.service.remove(id);
  // }
}
