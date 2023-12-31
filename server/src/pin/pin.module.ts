import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pin } from 'src/pin/entities/pin.entity';
import { PinService } from './pin.service';

@Module({
  providers: [PinService],
  imports: [TypeOrmModule.forFeature([Pin])],
  exports: [PinService],
})
export class PinModule {}
