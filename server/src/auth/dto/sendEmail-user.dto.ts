import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class SendEmailUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'Email of user',
    example: 'oHkS3@example.com',
  })
  email: string;
}
