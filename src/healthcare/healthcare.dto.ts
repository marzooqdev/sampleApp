import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateHealthcareDto {

  @IsNotEmpty()
  @IsString()
  treatment: string;

  @IsNotEmpty()
  @IsDate()
  treatmentDate: Date;

  @IsNotEmpty()
  patientId: number; // Assuming clientId is passed for relationship
}
