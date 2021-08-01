import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: typeof Task);
    createTask(dto: CreateTaskDto): Promise<Task>;
    getTasksByUserId(userId: number): Promise<Task[]>;
    getTasksByProjectId(projectId: number): Promise<Task[]>;
    deleteTaskById(id: number): Promise<number>;
}
