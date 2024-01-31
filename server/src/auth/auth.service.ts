import { MailerService } from '@nestjs-modules/mailer';
import {
  BadRequestException,
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync, hashSync } from 'bcrypt';
import { ActiveAccountUserDto } from 'src/auth/dto/active-account-user.dto';
import { ChangePasswordUserDto } from 'src/auth/dto/change-password-user.dto';
import { ValidatePinUserDto } from 'src/auth/dto/validatePin-user.dto';
import { PinService } from 'src/pin/pin.service';
import { Repository } from 'typeorm';
import { LoginUserDto, RegisterUserDto, SendEmailUserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly pinService: PinService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    try {
      const { password, confirmPassword, ...data } = registerUserDto;

      if (password !== confirmPassword)
        throw new HttpException('Password not match', 404);

      const user = this.userRepository.create({
        ...data,
        password: hashSync(password, 10),
        confirmPassword: hashSync(confirmPassword, 10),
      });

      await this.userRepository.save(user);

      delete user.password;
      delete user.confirmPassword;
      delete user.token;
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password, confirmPassword } = loginUserDto;

      const user = await this.userRepository.findOne({
        where: { email },
        select: {
          email: true,
          roles: true,
          password: true,
          name: true,
          confirmPassword: true,
          active: true,
          DNI: true,
          avatar: true,
          id: true,
        },
      });

      if (!user) throw new UnauthorizedException('User not found');

      if (password !== confirmPassword)
        throw new HttpException('Password not match', 404);

      if (!compareSync(password, user.password))
        throw new UnauthorizedException('Incorrect password');

      const token = this.getJwtToken({ id: user.id });

      this.updateTokeUser(user.id, token);

      delete user.password;
      delete user.confirmPassword;

      return {
        ...user,
        token,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async sendEmailRestorePassword(sendEmailUserDto: SendEmailUserDto) {
    try {
      const { email } = sendEmailUserDto;
      const user = await this.userRepository.findOneBy({ email });
      if (!user) throw new BadRequestException('User not found');
      const to = email;
      const subject = 'Restore Password';
      const pin = this.pinService.generatePinRandom();
      const expiryDate = new Date();
      expiryDate.setMinutes(expiryDate.getMinutes() + 1);
      const pinDto = {
        user,
        pin,
        expireDate: expiryDate,
      };
      this.pinService.create(pinDto, user);
      await this.mailerService.sendMail({
        to,
        subject,
        template: 'emails/restore-password',
        context: { subject, user, pin },
      });

      const tokenResetPassword = this.getJwtToken({ id: user.id });

      this.updateTokeUser(user.id, tokenResetPassword, 2);

      return {
        data: {
          messages: 'Your email of restore password sent your email',
          tokenResetPassword,
        },
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async sendEmailActiveAccount(sendEmailUserDto: SendEmailUserDto) {
    try {
      const { email } = sendEmailUserDto;
      const user = await this.userRepository.findOneBy({ email });
      if (!user) throw new BadRequestException('User not found');
      const to = email;
      const subject = 'Active Account';
      const pin = this.pinService.generatePinRandom();
      await this.mailerService.sendMail({
        to,
        subject,
        template: 'emails/active-account',
        context: { subject, user, pin },
      });
      return {
        message: 'Your email of active account sent your email',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async activeAccount(activeAccountUserDto: ActiveAccountUserDto, user: User) {
    try {
      const { id } = user;
      user = await this.userRepository.preload({
        id,
        active: activeAccountUserDto.active,
      });
      if (!user) throw new BadRequestException('User not found');
      await this.userRepository.save(user);
      return {
        message: 'Your Account Active',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async validatePin(validatePinUserDto: ValidatePinUserDto) {
    try {
      const { pin } = validatePinUserDto;
      const pinDb = await this.pinService.findOne(pin);
      if (!pinDb) throw new BadRequestException('Pin not valid');
      return {
        message: 'Pin valid',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async changePassword(
    changePasswordUserDto: ChangePasswordUserDto,
    user: User,
  ) {
    try {
      const { id } = user;
      user = await this.userRepository.preload({
        id,
        password: hashSync(changePasswordUserDto.password, 10),
        confirmPassword: hashSync(changePasswordUserDto.confirmPassword, 10),
      });
      if (!user) throw new BadRequestException('User not found');
      await this.userRepository.save(user);
      return {
        message: 'Change password success',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.userRepository.findOneBy({ id });
      if (!user) throw new BadRequestException('User not found');
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private async updateTokeUser(id: string, token: string, type: number = 1) {
    try {
      if (type === 1) {
        const user = await this.userRepository.preload({
          id,
          token,
        });
        await this.userRepository.save(user);
        return true;
      }
      if (type === 2) {
        const user = await this.userRepository.preload({
          id,
          tokenResetPassword: token,
        });
        await this.userRepository.save(user);
        return true;
      }
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    throw new HttpException(error.message, error.status);
  }

  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }
}
