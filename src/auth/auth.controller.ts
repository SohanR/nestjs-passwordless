import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // log in
  @Post('/login')
  login() {
    // TODO magic link to do
  }

  @Get('/login/callback')
  loginCallback() {
    // TODO access token
  }
}
