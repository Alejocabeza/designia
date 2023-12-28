import { IsEmail, IsString } from 'class-validator';

export class SendEmailActiveAccountUserDto {
  @IsString()
  @IsEmail()
  email: string;
}
