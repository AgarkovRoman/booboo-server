import { Project } from './projects.model';
import { CreateProjectDto } from './dto/create-project.dto';
export declare class ProjectsService {
    private projectRepository;
    constructor(projectRepository: typeof Project);
    createProject(dto: CreateProjectDto): Promise<Project>;
    deleteProject(projectId: number): Promise<number>;
    getProjectsByUserId(userId: number): Promise<Project[]>;
}
