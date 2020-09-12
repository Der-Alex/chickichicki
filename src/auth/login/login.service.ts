import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from '../user.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository) {
  }
  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    return 'You are logged in';
  }
  async logout() {
    // maybe delete server side cookies / session / jwt or whatever
    return 'You are logged out';
  }
}
