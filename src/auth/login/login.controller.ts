import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './dto/login.dto';

@Controller()
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    // log in the user
    return this.loginService.login(loginDto);
  }
  @Post('logout')
  async logout() {
    return this.loginService.logout();
  }
}
