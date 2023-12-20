import { SetMetadata } from '@nestjs/common';
import { METAROLES } from '../constans/METAROLES';
import { ValidRoles } from '../enums';

export const RoleProtected = (...args: ValidRoles[]) =>
  SetMetadata(METAROLES, args);
