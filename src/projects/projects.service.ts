import { Injectable } from '@nestjs/common';
import { Project } from './projects.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async createProject(dto: CreateProjectDto) {
    return await this.projectRepository.create(dto);
  }

  async delete(projectId: number) {
    return await this.projectRepository.destroy({
      where: { id: projectId },
    });
  }

  async getProjectsByUserId(userId: number) {
    return await this.projectRepository.findAll({
      where: { userId },
      raw: true,
    });
  }
}
