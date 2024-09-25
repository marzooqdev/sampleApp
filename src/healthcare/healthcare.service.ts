import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Healthcare } from 'src/entities/Healthcare.entity';
import { CreateHealthcareDto } from './healthcare.dto';

@Injectable()
export class HealthcareService {
  constructor(
    @InjectRepository(Healthcare)
    private readonly healthcareRepository: Repository<Healthcare>,
  ) {}

  async create(createHealthcareDto: CreateHealthcareDto): Promise<Healthcare> {
    const healthcare = this.healthcareRepository.create(createHealthcareDto);
    return this.healthcareRepository.save(healthcare);
  }
}
