import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { QueryOrder } from '@mikro-orm/core';
import { QueryBooleanTransform } from './validation.utils';

export class PaginationQueryDto {
  @IsInt()
  @Type(() => Number)
  @Min(0)
  @Max(500)
  @IsOptional()
  @ApiPropertyOptional()
  limit?: number = 20;

  @IsInt()
  @Type(() => Number)
  @Min(0)
  @IsOptional()
  @ApiPropertyOptional()
  offset?: number = 0;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  sortField?: string;

  @IsBoolean()
  @Transform(({ value }) => QueryBooleanTransform(value))
  @IsOptional()
  @ApiPropertyOptional()
  sortAsc?: boolean = true;
}

export function microOrmPaginationOptions(query: PaginationQueryDto) {
  return {
    limit: query.limit,
    offset: query.offset,
    ...getOrderBy(query.sortField, query.sortAsc),
  };
}

function getOrderBy(sortField?: string, sortAsc?: boolean) {
  if (!sortField) return undefined;

  const nestedSortFields = sortField.split('.').reverse();

  let result: any = {
    [nestedSortFields[0]]: sortAsc ? QueryOrder.ASC : QueryOrder.DESC,
  };

  for (let i = 1; i < nestedSortFields.length; i++) {
    result = { [nestedSortFields[i]]: result };
  }

  return { orderBy: result };
}

export type Paginated<T> = {
  paginationInfo: {
    offset: number;
    limit: number | null;
    totalNumItems: number;
    args: any;
  };
  items: T[];
};

export function paginatedResponse<T>(
  items: T[],
  totalNumItems: number,
  query: PaginationQueryDto,
): Paginated<T> {
  return {
    paginationInfo: {
      offset: query.offset,
      limit: query.limit,
      totalNumItems,
      args: query,
    },
    items,
  };
}
