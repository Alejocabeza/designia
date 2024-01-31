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
  @ApiProperty({
    type: String,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  tokenRestorePassword: string;
}
