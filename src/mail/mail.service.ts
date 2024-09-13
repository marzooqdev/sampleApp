import { Injectable, Logger } from '@nestjs/common';


@Injectable()
export class MailService {

  sendMail(email : string) {
    // Your mail sending logic here
    Logger.log(`mail sent to ${email}` )
  }
}
