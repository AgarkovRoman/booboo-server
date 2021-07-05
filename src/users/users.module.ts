import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-role.model';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';
import { Project } from '../projects/projects.model';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Project]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
