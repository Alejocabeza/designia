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
import { Repository } from 'typeorm';
import {
  SendEmailRestorePasswordUserDto,
  SignInUserDto,
  SignUpUserDto,
} from './dto';
import { SendEmailActiveAccountUserDto } from './dto/send-email-active-account-user.dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async signUp(signUpUserDto: SignUpUserDto) {
    try {
      const { password, confirmPassword, ...data } = signUpUserDto;

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
      delete user.tokenResetPassoword;
      delete user.token;
      return user;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async signIn(signInUserDto: SignInUserDto) {
    try {
      const { email, password, confirmPassword } = signInUserDto;

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

  async sendEmailRestorePassword(
    sendEmailRestorePasswordUserDto: SendEmailRestorePasswordUserDto,
  ) {
    try {
      const { email } = sendEmailRestorePasswordUserDto;
      const user = await this.userRepository.findOneBy({ email });
      if (!user) throw new BadRequestException('User not found');
      const to = email;
      const subject = 'Restore Password';
      await this.mailerService.sendMail({
        to,
        subject,
        template: 'emails/restore-password',
        context: { subject, user, url: 'http://localhost:5173' },
      });
      return {
        message: 'Your email of restore password sent your email',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async sendEmailActiveAccount(
    sendEmailActiveAccount: SendEmailActiveAccountUserDto,
  ) {
    try {
      const { email } = sendEmailActiveAccount;
      const user = await this.userRepository.findOneBy({ email });
      if (!user) throw new BadRequestException('User not found');
      const to = email;
      const subject = 'Restore Password';
      await this.mailerService.sendMail({
        to,
        subject,
        template: 'emails/active-account',
        context: { subject, user, url: 'http://localhost:5173' },
      });
      return {
        message: 'Your email of active account sent your email',
        code: 200,
      };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  // restorePassword(restorePasswordUserDto: RestorePasswordUserDto) {}

  private async updateTokeUser(id: string, token: string) {
    try {
      const user = await this.userRepository.preload({
        id,
        token,
      });
      await this.userRepository.save(user);
      return true;
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
