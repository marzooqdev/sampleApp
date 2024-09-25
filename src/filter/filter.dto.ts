import { IsNotEmpty, IsString, IsArray, IsIn, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterValueDto {
  @IsNotEmpty()
  values: any[];
}

export class FilterOperationDto {
  @IsNotEmpty()
  @IsString()
  field: string;

  @IsNotEmpty()
  @IsIn(['is', 'in', 'between'])
  operation: 'is' | 'in' | 'between';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterValueDto)
  values: FilterValueDto[];
}

export class QueryDto {
  @IsNotEmpty()
  @IsIn(['client', 'accounting', 'business', 'healthcare'])
  entity: 'client' | 'accounting' | 'business' | 'healthcare';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FilterOperationDto)
  filters: FilterOperationDto[];

  @IsOptional()
  @IsIn(['AND', 'OR', null])
  relation: 'AND' | 'OR' | null;
}

export class FilterDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QueryDto)
  queries: QueryDto[];
}
