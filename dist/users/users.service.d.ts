import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesService } from '../roles/roles.service';
export declare class UsersService {
    private userRepository;
    private roleService;
    constructor(userRepository: typeof User, roleService: RolesService);
    createUser(dto: CreateUserDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
}
