import { Body, Controller, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }
}
