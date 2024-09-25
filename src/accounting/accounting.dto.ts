import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountingDto {
  @IsNotEmpty()
  @IsString()
  firmName: string;

  @IsNotEmpty()
  @IsString()
  amount :  number;

  @IsNotEmpty()
  @IsDate()
  transactionDate: Date;

  @IsNotEmpty()
  clientId: number; // Assuming clientId is passed for relationship
}
