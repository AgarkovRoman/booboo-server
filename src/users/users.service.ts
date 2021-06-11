import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './users.model';
import { CreateUserDto } from './create-user.dto';
import { GetUserDto } from './get-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getUser(dto: GetUserDto) {
    const { id } = dto;
    return await this.userRepository.findByPk(id);
  }
}
