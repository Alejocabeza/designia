import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { LoginResponse, SendEmailResponse } from 'src/auth/clases';
import { User } from 'src/auth/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto, SendEmailUserDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  // @Auth(ValidRoles.admin)
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiBody({ type: RegisterUserDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  signUp(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.signUp(registerUserDto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login user',
  })
  @ApiBody({ type: LoginUserDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: LoginResponse,
  })
  signIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(loginUserDto);
  }

  @Post('send_email_restore_password')
  @ApiOperation({
    summary: 'Send email restore password',
  })
  @ApiBody({ type: SendEmailUserDto })
  @ApiCreatedResponse({
    description: 'The Email has been successfully created.',
    type: SendEmailResponse,
  })
  sendEmailRestorePassword(@Body() sendEmailUserDto: SendEmailUserDto) {
    return this.authService.sendEmailRestorePassword(sendEmailUserDto);
  }

  @Post('send_email_active_account')
  @ApiOperation({
    summary: 'Active account',
  })
  @ApiBody({ type: SendEmailUserDto })
  @ApiCreatedResponse({
    description: 'The Email has been successfully created.',
    type: SendEmailResponse,
  })
  sendEmailActiveAccount(@Body() SendEmailUserDto: SendEmailUserDto) {
    return this.authService.sendEmailActiveAccount(SendEmailUserDto);
  }
}
