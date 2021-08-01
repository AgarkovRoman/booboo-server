import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { GetTaskDto } from './dto/get-task.dto';

@ApiTags('Tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.createTask(dto);
  }

  @ApiOperation({ summary: 'Get tasks by user id' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get('/:id')
  getTasksByUserId(@Param('id') id: number) {
    return this.tasksService.getTasksByUserId(id);
  }

  @ApiOperation({ summary: 'Get tasks by projects id' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getTasksByProjectId(@Body() dto: GetTaskDto) {
    return this.tasksService.getTasksByProjectId(dto.projectId);
  }

  @ApiOperation({ summary: 'Delete tasks by id' })
  @ApiResponse({ status: 200 })
  @Delete()
  deleteTasksById(@Body() id: number) {
    return this.tasksService.deleteTaskById(id);
  }
}
