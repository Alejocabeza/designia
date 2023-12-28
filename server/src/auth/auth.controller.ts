import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import {
  SendEmailActiveAccountUserDto,
  SendEmailRestorePasswordUserDto,
  SignInUserDto,
  SignUpUserDto,
} from './dto';
import { ValidRoles } from './enums';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @Auth(ValidRoles.admin)
  signUp(@Body() signUpUserDto: SignUpUserDto) {
    return this.authService.signUp(signUpUserDto);
  }

  @Post('signin')
  signIn(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto);
  }

  @Post('restore-password')
  sendEmailRestorePassword(
    @Body() sendEmailRestorePasswordUserDto: SendEmailRestorePasswordUserDto,
  ) {
    return this.authService.sendEmailRestorePassword(
      sendEmailRestorePasswordUserDto,
    );
  }

  @Post('active-account')
  sendEmailActiveAccount(
    @Body() sendEmailActiveAccount: SendEmailActiveAccountUserDto,
  ) {
    return this.authService.sendEmailActiveAccount(sendEmailActiveAccount);
  }
}
