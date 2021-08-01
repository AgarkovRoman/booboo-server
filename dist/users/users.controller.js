"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("./users.model");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const add_role_dto_1 = require("./dto/add-role.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getById(id) {
        return this.usersService.getUserById(id);
    }
    getAllUsers() {
        return this.usersService.getAllUsers();
    }
    addRole(dto) {
        return this.usersService.addRole(dto);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Get user by Id' }),
    swagger_1.ApiResponse({ status: 200, type: users_model_1.User }),
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get all users' }),
    swagger_1.ApiResponse({ status: 200, type: users_model_1.User }),
    roles_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Add role to the user' }),
    swagger_1.ApiResponse({ status: 200 }),
    roles_auth_decorator_1.Roles('ADMIN'),
    common_1.UseGuards(roles_guard_1.RolesGuard),
    common_1.Post('/role'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_role_dto_1.AddRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "addRole", null);
UsersController = __decorate([
    swagger_1.ApiTags('Users'),
    common_1.Controller('api/users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map