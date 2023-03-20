/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Query, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Todo } from "./model/todo.schema";
import { TodoService } from "./service/todo.service";


@Controller('/api/v1/todo')
export class TodoController {
    constructor(private readonly todoService: TodoService
    ) { }

    @Post()
    async createTodo(@Res() response, @Body() todo:Todo) {
        const requestBody = {title: todo.title, description: todo.description }
        const newTodo = await this.todoService.createTodo(requestBody);
        return response.status(HttpStatus.CREATED).json({
            newTodo
        })
    }

    @Get()
    async allTodo(@Query() id): Promise<any> {
        return await this.todoService.allTodo(id);
    }

    @Get('/:id')
    async singleTodo(@Res() response,@Param('id') id): Promise<any> {
        const singleUpdate = await this.todoService.singleTodo(id);
        return response.status(HttpStatus.OK).json(singleUpdate)
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() body) {
        const updatedTodo = await this.todoService.updateTodo(id, body);
        return response.status(HttpStatus.OK).json(updatedTodo)
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        await this.todoService.delete(id);
        return response.status(HttpStatus.OK).json({
            user: null
        })
    }
}
