import { ApiProperty } from '@nestjs/swagger';

export class GetProfileResponse {
  @ApiProperty({
    type: String,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  id: string;

  @ApiProperty({
    type: String,
    example: '123456789',
  })
  DNI: string;

  @ApiProperty({
    type: String,
    example: 'j@j.com',
  })
  email: string;

  @ApiProperty({
    type: String,
    example: ['admin'],
  })
  roles: string[];

  @ApiProperty({
    type: String,
    example:
      'https://www.gravatar.com/avatar/123e4567-e89b-12d3-a456-426614174000',
  })
  avatar: string;

  @ApiProperty({
    description: 'The User by default is inactive',
    type: Boolean,
    example: false,
  })
  active: boolean;
}
