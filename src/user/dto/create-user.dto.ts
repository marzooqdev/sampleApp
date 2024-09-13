import { IsEmail, IsEnum, IsString } from 'class-validator';
import { UserRole } from '../../enums/user.enum';

export class CreatedUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  role: UserRole;
}
