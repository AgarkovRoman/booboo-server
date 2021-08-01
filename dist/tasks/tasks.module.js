"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const tasks_controller_1 = require("./tasks.controller");
const tasks_service_1 = require("./tasks.service");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const projects_model_1 = require("../projects/projects.model");
const tasks_model_1 = require("./tasks.model");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    common_1.Module({
        providers: [tasks_service_1.TasksService],
        controllers: [tasks_controller_1.TasksController],
        imports: [sequelize_1.SequelizeModule.forFeature([users_model_1.User, projects_model_1.Project, tasks_model_1.Task])],
        exports: [tasks_service_1.TasksService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map