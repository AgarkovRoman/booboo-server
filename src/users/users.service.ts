import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getUserById(id: number) {
    return await this.userRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async addRole(dto: AddRoleDto) {
    const { value, userId } = dto;
    const user = await this.userRepository.findByPk(userId);
    const role = await this.roleService.getRoleByValue(value);
    if (role && user) {
      await user.$add('role', role.id);
      return dto;
    }
    throw new HttpException('User or Role not found', HttpStatus.NOT_FOUND);
  }
}
