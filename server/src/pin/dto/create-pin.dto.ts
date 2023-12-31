import { User } from 'src/auth/entities/user.entity';

export class CreatePinDto {
  pin: number;
  expireDate: Date;
  user: User;
}
