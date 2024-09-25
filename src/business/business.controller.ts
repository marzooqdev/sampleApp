import { Body, Controller, Post } from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './business.dto';

@Controller('businesses')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async create(@Body() createBusinessDto: CreateBusinessDto) {
    return this.businessService.create(createBusinessDto);
  }
}
