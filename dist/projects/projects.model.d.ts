import { Model } from 'sequelize-typescript';
import { User } from '../users/users.model';
interface ProjectCreationAttrs {
    name: string;
    description?: string;
    userId: number;
}
export declare class Project extends Model<Project, ProjectCreationAttrs> {
    id: number;
    name: string;
    description?: string;
    userId: number;
    author: User;
}
export {};
