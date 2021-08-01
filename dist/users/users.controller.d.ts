import { UsersService } from './users.service';
import { User } from './users.model';
import { AddRoleDto } from './dto/add-role.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getById(id: number): Promise<User>;
    getAllUsers(): Promise<User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
}
