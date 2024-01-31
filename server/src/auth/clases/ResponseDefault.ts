import { ApiProperty } from '@nestjs/swagger';

export class ResponseDefault {
  @ApiProperty({
    type: Number,
    example: 200,
  })
  code: number;

  @ApiProperty({
    type: String,
    example: 'Success',
  })
  message: string;
}
