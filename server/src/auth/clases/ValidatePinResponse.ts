import { ApiProperty } from '@nestjs/swagger';

export class ValidatePinResponse {
  @ApiProperty({
    type: Number,
    example: 200,
  })
  code: number;
  @ApiProperty({
    type: String,
    example: 'Pin Validated',
  })
  message: string;
}
