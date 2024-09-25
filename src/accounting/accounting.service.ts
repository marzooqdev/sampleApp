import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Accounting } from 'src/entities/Accounting.entity';
import { CreateAccountingDto } from './accounting.dto';

@Injectable()
export class AccountingService {
  constructor(
    @InjectRepository(Accounting)
    private readonly accountingRepository: Repository<Accounting>,
  ) {}

  async create(createAccountingDto: CreateAccountingDto): Promise<Accounting> {
    const accounting = this.accountingRepository.create(createAccountingDto);
    return this.accountingRepository.save(accounting);
  }
}
