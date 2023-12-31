import { ApiProperty } from '@nestjs/swagger';

export class SendEmailResponse {
  @ApiProperty({
    type: Number,
    example: 200,
  })
  code: number;
  @ApiProperty({
    type: String,
    example: 'Email enviado',
  })
  message: string;
}
