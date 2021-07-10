import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private taskRepository: typeof Task) {}

  async createTask(dto: CreateTaskDto) {
    return await this.taskRepository.create(dto);
  }

  async getTasksByUserId(userId: number) {
    return await this.taskRepository.findAll({
      where: { userId },
      raw: true,
    });
  }

  async getTasksByProjectId(projectId: number) {
    return await this.taskRepository.findAll({
      where: { projectId },
      raw: true,
    });
  }

  async deleteTaskById(id: number) {
    return await this.taskRepository.destroy({
      where: { id },
    });
  }
}
