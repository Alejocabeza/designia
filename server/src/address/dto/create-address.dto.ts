import { IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  name: string;

  @IsString()
  municipality: string;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  mainAddress: string;
}
