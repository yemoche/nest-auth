/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import {
    Injectable,
    NotFoundException,
    ServiceUnavailableException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Todo, TodoDocument } from "../model/todo.schema";
import { Model } from "mongoose";



@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) { }

    async createTodo(todo: Object): Promise<Todo> {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }

    async allTodo(id): Promise<any> {
        if (id.id) {
            return this.todoModel.findOne({ _id: id.id }).populate("createdBy").exec();
        }
        return this.todoModel.find().populate("createdBy").exec();
    }

    async singleTodo(id: string) {
        try {
            const data = await this.todoModel.findOne({ _id: id })
            if (!data) {
                throw new NotFoundException(null, 'TodoNotFound')
            }
        } catch (e) {
            console.error(e)
            throw new ServiceUnavailableException()
        }
    }

    async updateTodo(id, todo: Todo): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, todo, { new: true })
    }

    async delete(id): Promise<any> {
        return await this.todoModel.findByIdAndRemove(id);
    }
}