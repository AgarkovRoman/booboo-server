import { Model } from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Project } from '../projects/projects.model';
interface TaskCreationAttrs {
    name: string;
    description?: string;
    userId: number;
    projectId: number;
}
export declare class Task extends Model<Task, TaskCreationAttrs> {
    id: number;
    archived: boolean;
    date: string;
    name: string;
    description?: string;
    userId: number;
    projectId: number;
    author: User;
    project: Project;
}
export {};
