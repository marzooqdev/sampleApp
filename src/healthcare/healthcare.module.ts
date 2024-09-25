import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Healthcare } from 'src/entities/Healthcare.entity';
import { HealthcareService } from './healthcare.service';
import { HealthcareController } from './healthcare.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Healthcare])],
  providers: [HealthcareService],
  controllers: [HealthcareController],
})
export class HealthcareModule {}
