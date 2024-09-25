import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'src/entities/Client.entity';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';

@Module({
    imports : [TypeOrmModule.forFeature([Client])],
    providers  : [ClientService],
    controllers : [ClientController]
})
export class ClientModule {}



