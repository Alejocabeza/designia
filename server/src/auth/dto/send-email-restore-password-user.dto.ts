import { IsEmail, IsString } from 'class-validator';

export class SendEmailRestorePasswordUserDto {
  @IsString()
  @IsEmail()
  email: string;
}
