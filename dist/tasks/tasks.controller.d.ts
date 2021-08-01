import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';
import { GetTaskDto } from "./dto/get-task.dto";
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    createTask(dto: CreateTaskDto): Promise<Task>;
    getTasksByUserId(id: number): Promise<Task[]>;
    getTasksByProjectId(dto: GetTaskDto): Promise<Task[]>;
    deleteTasksById(id: number): Promise<number>;
}
