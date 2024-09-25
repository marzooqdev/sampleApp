import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/Client.entity';
import { Accounting } from 'src/entities/Accounting.entity';
import { Business } from 'src/entities/Business.entity';
import { Healthcare } from 'src/entities/Healthcare.entity';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Accounting, Business, Healthcare])],
  controllers: [FilterController],
  providers: [FilterService],
})
export class FilterModule {}
