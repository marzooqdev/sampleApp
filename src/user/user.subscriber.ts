// user.subscriber.ts
import { EntitySubscriberInterface, InsertEvent, DataSource } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { Injectable, Logger } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    private readonly mailService: MailService,
    private dataSource: DataSource,
  ) {
    this.dataSource.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async afterInsert(event: InsertEvent<User>) {
    Logger.log('User created after insert:', event.entity);
    const { email } = event.entity;
    this.mailService.sendMail(email);
  }
}
