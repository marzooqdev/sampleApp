import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { CreatedUserDto } from './dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private mailService: MailService,
  ) {}

  findAll() {
    Logger.log('User find all method');
    return this.usersRepository.find();
  }

  test() {
    Logger.log('testing subscribers');
  }

  findOne(id: number) {
    Logger.log('User find one method');
    return this.usersRepository.findOneBy({ id });
  }

  create(user: CreatedUserDto) {
    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    Logger.log('User remove method');
    await this.usersRepository.delete(id);
  }
}
