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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const projects_model_1 = require("./projects.model");
const sequelize_1 = require("@nestjs/sequelize");
let ProjectsService = class ProjectsService {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async createProject(dto) {
        return await this.projectRepository.create(dto);
    }
    async deleteProject(projectId) {
        return await this.projectRepository.destroy({
            where: { id: projectId },
        });
    }
    async getProjectsByUserId(userId) {
        return await this.projectRepository.findAll({
            where: { userId },
            raw: true,
        });
    }
};
ProjectsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(projects_model_1.Project)),
    __metadata("design:paramtypes", [Object])
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=projects.service.js.map