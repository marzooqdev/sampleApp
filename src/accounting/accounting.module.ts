import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounting } from 'src/entities/Accounting.entity';
import { AccountingService } from './accounting.service';
import { AccountingController } from './accounting.controller';

@Module({
    imports : [TypeOrmModule.forFeature([Accounting])],
    providers : [AccountingService],
    controllers : [AccountingController]
})
export class AccountingModule {}






