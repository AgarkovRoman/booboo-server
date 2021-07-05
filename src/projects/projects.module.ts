import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Project } from './projects.model';

@Module({
  providers: [ProjectsService],
  controllers: [ProjectsController],
  imports: [SequelizeModule.forFeature([User, Project])],
  exports: [ProjectsService],
})
export class ProjectsModule {}
