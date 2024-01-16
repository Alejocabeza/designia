import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ValidatePinUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Pin',
    example: '123456',
  })
  pin: string;
}
