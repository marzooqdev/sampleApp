import { Body, Controller, Post } from '@nestjs/common';
import { AccountingService } from './accounting.service';
import { CreateAccountingDto } from './accounting.dto';

@Controller('accountings')
export class AccountingController {
  constructor(private readonly accountingService: AccountingService) {}

  @Post()
  async create(@Body() createAccountingDto: CreateAccountingDto) {
    return this.accountingService.create(createAccountingDto);
  }
}
