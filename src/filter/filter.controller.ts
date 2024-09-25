import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterDto } from './filter.dto';
@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Post('search')
  async search(@Body() query: FilterDto) {
    return this.filterService.applyFilters(query);
  }
}
