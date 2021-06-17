import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { User } from '../users/users.model';

@Module({
  providers: [RolesController],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User])],
})
export class RolesModule {}
