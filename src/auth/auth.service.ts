import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/create-user.dto';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async login(userDto: CreateUserDto) {}

  async registration(userDto: CreateUserDto) {}
}
