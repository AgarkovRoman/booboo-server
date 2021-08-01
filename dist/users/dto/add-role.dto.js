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
exports.AddRoleDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class AddRoleDto {
}
__decorate([
    swagger_1.ApiProperty({ example: 'ADMIN', description: 'Role value' }),
    class_validator_1.IsString({ message: 'Must be a string' }),
    __metadata("design:type", String)
], AddRoleDto.prototype, "value", void 0);
__decorate([
    swagger_1.ApiProperty({ example: '1', description: 'User id' }),
    class_validator_1.IsNumber({}, { message: 'Must be a number' }),
    __metadata("design:type", Number)
], AddRoleDto.prototype, "userId", void 0);
exports.AddRoleDto = AddRoleDto;
//# sourceMappingURL=add-role.dto.js.map