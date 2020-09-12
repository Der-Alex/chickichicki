import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
    await this.authService.signup(authCredentialsDto);
  }

  @Post('login')
  async login(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    // log in the user
    return this.authService.login(authCredentialsDto);
  }
  
  @Post('logout')
  async logout() {
    return this.authService.logout();
  }
  
  @Post('test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
    return { messagage: "You are logged in." };
  }
}
