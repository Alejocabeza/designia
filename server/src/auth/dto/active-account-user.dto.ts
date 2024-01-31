import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ActiveAccountUserDto {
  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  active: boolean;
}
