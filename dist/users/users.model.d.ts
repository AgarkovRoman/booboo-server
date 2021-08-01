import { Model } from 'sequelize-typescript';
import { Role } from '../roles/roles.model';
import { Project } from '../projects/projects.model';
interface UserCreationAttrs {
    email: string;
    password: string;
    name?: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    name: string;
    email: string;
    password: string;
    roles: Role[];
    projects: Project[];
}
export {};
