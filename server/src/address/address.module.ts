import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Address } from './entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AddressController],
  providers: [AddressService],
  imports: [AuthModule, TypeOrmModule.forFeature([Address])],
})
export class AddressModule {}
