import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/authCredentials.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './dto/jwtPayload.dto';
import { access } from 'fs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signup(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signup(authCredentialsDto);
  }

  async login(authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const email = await this.userRepository.login(authCredentialsDto);
    if (!email) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayloadDto = { email };
    const accessToken = await this.jwtService.sign(payload, { secret: process.env.JWT_SECRET });
    return { accessToken };
  }

  async logout() {
    // maybe delete server side cookies / session / jwt or whatever
    return 'You are logged out';
  }
}
