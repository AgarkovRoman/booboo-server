import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Project } from './projects.model';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @ApiOperation({ summary: 'Project creating' })
  @ApiResponse({ status: 200, type: Project })
  @Post()
  createProject(@Body() dto: CreateProjectDto) {
    console.log('controller: ', dto);
    return this.projectsService.createProject(dto);
  }

  // updateProject() {}

  // @Delete()
  // deleteProject(projectId) {
  //   return this.projectsService.delete(projectId);
  // }

  // @Get('/:id')
  // getAllProjects(@Param('id') id: number) {
  //   return this.projectsService.getProjectsByUserId(id);
  // }

  // getProjectByUserId() {}
}
