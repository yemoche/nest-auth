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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_schema_1 = require("./model/todo.schema");
const todo_service_1 = require("./service/todo.service");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async createTodo(response, todo) {
        const requestBody = { title: todo.title, description: todo.description };
        const newTodo = await this.todoService.createTodo(requestBody);
        return response.status(common_1.HttpStatus.CREATED).json({
            newTodo
        });
    }
    async allTodo(id) {
        return await this.todoService.allTodo(id);
    }
    async singleTodo(response, id) {
        const singleUpdate = await this.todoService.singleTodo(id);
        return response.status(common_1.HttpStatus.OK).json(singleUpdate);
    }
    async update(response, id, body) {
        const updatedTodo = await this.todoService.updateTodo(id, body);
        return response.status(common_1.HttpStatus.OK).json(updatedTodo);
    }
    async delete(response, id) {
        await this.todoService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            user: null
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, todo_schema_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "allTodo", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "singleTodo", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "delete", null);
TodoController = __decorate([
    (0, common_1.Controller)('/api/v1/todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map