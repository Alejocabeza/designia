import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { CreatePinDto } from 'src/pin/dto/create-pin.dto';
import { Pin } from 'src/pin/entities/pin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PinService {
  constructor(
    @InjectRepository(Pin) private readonly pinRepository: Repository<Pin>,
  ) {}

  async create(createPinDto: CreatePinDto, user: User) {
    try {
      const oldPin = await this.finderPinByUser(user);
      if (oldPin || oldPin.length > 0) {
        oldPin.forEach((pin) => this.pinRepository.remove(pin));
      }
      const newPin = this.pinRepository.create({
        pin: createPinDto.pin,
        user: createPinDto.user,
      });
      await this.pinRepository.save(newPin);
      return newPin;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(pin: string): Promise<Pin> {
    try {
      return this.finderPin(pin);
    } catch (error) {
      this.handleDBExceptions(error);
    }
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

  private async finderPinByUser(user: User) {
    return await this.pinRepository
      .createQueryBuilder('pin')
      .where('pin.userId = :user', { user: user.id })
      .getMany();
  }

  private async finderPin(pin: string) {
    const pins = await this.pinRepository
      .createQueryBuilder('pin')
      .where('pin.pin = pin', { pin })
      .getMany();
    return pins[0];
  }
}
