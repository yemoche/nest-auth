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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const todo_schema_1 = require("../model/todo.schema");
const mongoose_2 = require("mongoose");
let TodoService = class TodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async createTodo(todo) {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }
    async allTodo(id) {
        if (id.id) {
            return this.todoModel.findOne({ _id: id.id }).populate("createdBy").exec();
        }
        return this.todoModel.find().populate("createdBy").exec();
    }
    async singleTodo(id) {
        try {
            const data = await this.todoModel.findOne({ _id: id });
            if (!data) {
                throw new common_1.NotFoundException(null, 'TodoNotFound');
            }
        }
        catch (e) {
            console.error(e);
            throw new common_1.ServiceUnavailableException();
        }
    }
    async updateTodo(id, todo) {
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true });
    }
    async delete(id) {
        return await this.todoModel.findByIdAndRemove(id);
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map