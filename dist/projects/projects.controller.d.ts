import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectsService } from './projects.service';
import { Project } from './projects.model';
export declare class ProjectsController {
    private projectsService;
    constructor(projectsService: ProjectsService);
    createProject(dto: CreateProjectDto): Promise<Project>;
    deleteProject(projectId: number): Promise<number>;
    getProjectsByUserId(id: number): Promise<Project[]>;
}
