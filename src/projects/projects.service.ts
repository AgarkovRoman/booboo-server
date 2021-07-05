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
    const project = await this.projectRepository.create(dto);
    console.log('project: ', project);
    return project;
  }

  // async delete(id: number) {
  //   return await this.projectRepository.destroy({}, id);
  // }

  async getProjectsByUserId(id: number) {
    return await this.projectRepository.findByPk(id);
  }
}
