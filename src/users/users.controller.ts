import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { Roles } from '../auth/roles-auth.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';

@ApiTags('Users')
@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @ApiOperation({ summary: 'Creating user' })
  // @ApiResponse({ status: 200, type: User })
  // @Post()
  // create(@Body() userDto: CreateUserDto) {
  //   return this.usersService.createUser(userDto);
  // }

  @ApiOperation({ summary: 'Get user by Id' })
  @ApiResponse({ status: 200, type: User })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: 'Add role to the user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }
}
