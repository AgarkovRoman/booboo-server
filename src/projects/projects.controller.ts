import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from './projects.model';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Create project ' })
  @ApiResponse({ status: 200, type: Project })
  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    return this.projectsService.createProject(dto);
  }

  // updateProject() {}

  @ApiOperation({ summary: 'Delete project' })
  @ApiResponse({ status: 200 })
  @Delete('/:id')
  deleteProject(@Param('id') projectId: number) {
    return this.projectsService.deleteProject(projectId);
  }

  @ApiOperation({ summary: 'Get projects by user id' })
  @ApiResponse({ status: 200, type: [Project] })
  // TODO: сделать по токену, а не по id
  @Get('/:id')
  getProjectsByUserId(@Param('id') id: number) {
    return this.projectsService.getProjectsByUserId(id);
  }
}
