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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../users/users.model");
const projects_model_1 = require("../projects/projects.model");
let Task = class Task extends sequelize_typescript_1.Model {
};
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'Unique id' }),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'Archive task or not' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.BOOLEAN, allowNull: true, defaultValue: false }),
    __metadata("design:type", Boolean)
], Task.prototype, "archived", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '04/03/2021', description: 'Task todo date' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Task.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'Task 1', description: 'Task name' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING, allowNull: true }),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ example: 'To do task 1', description: 'Task description' }),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.STRING }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => users_model_1.User),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Task.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => projects_model_1.Project),
    sequelize_typescript_1.Column({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], Task.prototype, "projectId", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => users_model_1.User),
    __metadata("design:type", users_model_1.User)
], Task.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => projects_model_1.Project),
    __metadata("design:type", projects_model_1.Project)
], Task.prototype, "project", void 0);
Task = __decorate([
    sequelize_typescript_1.Table({ tableName: 'tasks' })
], Task);
exports.Task = Task;
//# sourceMappingURL=tasks.model.js.map