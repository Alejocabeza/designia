import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pin } from 'src/pin/entities/pin.entity';
import { Repository } from 'typeorm';
import { CreatePinDto } from './dto/create-pin.dto';
import { UpdatePinDto } from './dto/update-pin.dto';

@Injectable()
export class PinService {
  constructor(
    @InjectRepository(Pin) private readonly pinRepository: Repository<Pin>,
  ) {}

  async create(createPinDto: CreatePinDto) {
    try {
      console.log(typeof createPinDto.pin);
      const newPin = this.pinRepository.create({
        pin: createPinDto.pin,
        expireDate: createPinDto.expireDate,
        user: createPinDto.user,
      });
      await this.pinRepository.save(newPin);
      return newPin;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  update(id: number, UpdatePinDto: UpdatePinDto) {
    console.log(UpdatePinDto, id);
  }

  public generatePinRandom() {
    let pin = Math.floor(Math.random() * 100000000);
    while (pin < 10000000) {
      pin *= 10;
    }
    return pin;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new HttpException(error.message, error.status);
  }
}
