import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessService } from './business.service';
import { Business } from 'src/entities/Business.entity';
import { BusinessController } from './business.controller';

@Module({
    imports : [TypeOrmModule.forFeature([Business])],
    providers : [BusinessService],
    controllers : [BusinessController]
})
export class BusinessModule {}





