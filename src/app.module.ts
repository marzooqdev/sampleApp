import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User.entity';
import { UserModule } from './user/user.module';
import { UserSubscriber } from './user/user.subscriber';
import { MailModule } from './mail/mail.module';
import { FilterModule } from './filter/filter.module';
import { ClientModule } from './client/client.module';
import { AccountingModule } from './accounting/accounting.module';
import { BusinessModule } from './business/business.module';
import { HealthcareModule } from './healthcare/healthcare.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root_password',
      database: 'my_database',
      entities: [User], // Add your entities here
      synchronize: true, // For development; disable in production
      autoLoadEntities: true,
      subscribers: [UserSubscriber],
    }),
    UserModule,
    MailModule,
    FilterModule,
    ClientModule,
    AccountingModule,
    BusinessModule,
    HealthcareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
