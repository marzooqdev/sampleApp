import { Body, Controller, Post } from '@nestjs/common';
import { HealthcareService } from './healthcare.service';
import { CreateHealthcareDto } from './healthcare.dto';

@Controller('healthcares')
export class HealthcareController {
  constructor(private readonly healthcareService: HealthcareService) {}

  @Post()
  async create(@Body() createHealthcareDto: CreateHealthcareDto) {
    return this.healthcareService.create(createHealthcareDto);
  }
}
