"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("./users.model");
const roles_model_1 = require("../roles/roles.model");
const user_role_model_1 = require("../roles/user-role.model");
const roles_module_1 = require("../roles/roles.module");
const auth_module_1 = require("../auth/auth.module");
const projects_model_1 = require("../projects/projects.model");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    common_1.Module({
        providers: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([users_model_1.User, roles_model_1.Role, user_role_model_1.UserRoles, projects_model_1.Project]),
            roles_module_1.RolesModule,
            common_1.forwardRef(() => auth_module_1.AuthModule),
        ],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map