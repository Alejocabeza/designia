import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  GetProfileResponse,
  LoginResponse,
  ResponseDefault,
  SendEmailResponse,
} from 'src/auth/clases';
import { Auth } from 'src/auth/decorators';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { ActiveAccountUserDto } from 'src/auth/dto/active-account-user.dto';
import { ValidatePinUserDto } from 'src/auth/dto/validatePin-user.dto';
import { User } from 'src/auth/entities/user.entity';
import { ValidRoles } from 'src/auth/enums';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto, SendEmailUserDto } from './dto';
import { ChangePasswordUserDto } from './dto/change-password-user.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Auth(ValidRoles.admin)
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiBody({ type: RegisterUserDto })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: User,
  })
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
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
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
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

  @Post('validate_pin')
  @ApiOperation({
    summary: 'Validate pin',
  })
  @ApiBody({ type: ValidatePinUserDto })
  @ApiCreatedResponse({
    description: 'The Pin has been successfully created.',
    type: ResponseDefault,
  })
  @Auth()
  validatePin(@Body() validatePinUserDto: ValidatePinUserDto) {
    return this.authService.validatePin(validatePinUserDto);
  }

  @Post('change_password')
  @ApiOperation({
    summary: 'Change password',
  })
  @ApiBody({ type: ChangePasswordUserDto })
  @ApiCreatedResponse({
    description: 'The Password has been successfully created.',
    type: ResponseDefault,
  })
  @Auth()
  changePassword(
    @Body() changePasswordUserDto: ChangePasswordUserDto,
    @GetUser() user: User,
  ) {
    return this.authService.changePassword(changePasswordUserDto, user);
  }

  @Post('send_email_active_account')
  @ApiOperation({
    summary: 'Send email active account',
  })
  @ApiBody({ type: SendEmailUserDto })
  @ApiCreatedResponse({
    description: 'The Email has been successfully created.',
    type: ResponseDefault,
  })
  sendEmailActiveAccount(@Body() SendEmailUserDto: SendEmailUserDto) {
    return this.authService.sendEmailActiveAccount(SendEmailUserDto);
  }

  @Post('active_account')
  @ApiOperation({
    summary: 'Active account',
  })
  @ApiBody({ type: ActiveAccountUserDto })
  @ApiCreatedResponse({
    description: 'The your account has been successfully active.',
    type: ResponseDefault,
  })
  @Auth()
  activeAccount(
    @Body() activeAccountUserDto: ActiveAccountUserDto,
    @GetUser() user: User,
  ) {
    return this.authService.activeAccount(activeAccountUserDto, user);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Profile',
  })
  @ApiCreatedResponse({
    description: 'Get user profile',
    type: GetProfileResponse,
  })
  @Auth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.authService.findOne(id);
  }
}
