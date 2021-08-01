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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const tasks_model_1 = require("./tasks.model");
const get_task_dto_1 = require("./dto/get-task.dto");
let TasksController = class TasksController {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    createTask(dto) {
        return this.tasksService.createTask(dto);
    }
    getTasksByUserId(id) {
        return this.tasksService.getTasksByUserId(id);
    }
    getTasksByProjectId(dto) {
        return this.tasksService.getTasksByProjectId(dto.projectId);
    }
    deleteTasksById(id) {
        return this.tasksService.deleteTaskById(id);
    }
};
__decorate([
    swagger_1.ApiOperation({ summary: 'Create task' }),
    swagger_1.ApiResponse({ status: 200, type: tasks_model_1.Task }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "createTask", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get tasks by user id' }),
    swagger_1.ApiResponse({ status: 200, type: [tasks_model_1.Task] }),
    common_1.Get('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByUserId", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Get tasks by projects id' }),
    swagger_1.ApiResponse({ status: 200, type: [tasks_model_1.Task] }),
    common_1.Get(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_task_dto_1.GetTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "getTasksByProjectId", null);
__decorate([
    swagger_1.ApiOperation({ summary: 'Delete tasks by id' }),
    swagger_1.ApiResponse({ status: 200 }),
    common_1.Delete(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "deleteTasksById", null);
TasksController = __decorate([
    swagger_1.ApiTags('Tasks'),
    common_1.Controller('api/tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map