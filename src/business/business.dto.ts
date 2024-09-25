import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateBusinessDto {
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsDate()
  startedAt: Date;

  @IsNotEmpty()
  clientId: number; // Assuming clientId is passed for relationship
}
