import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User.entity';
import { UserModule } from './user/user.module';
import { UserSubscriber } from './user/user.subscriber';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root_password',
      database: 'my_database',
      entities: [User],  // Add your entities here
      synchronize: true, // For development; disable in production
      autoLoadEntities: true,
      subscribers : [UserSubscriber]
    }),
    UserModule,
    MailModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
