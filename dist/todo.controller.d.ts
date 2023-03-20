import { Todo } from "./model/todo.schema";
import { TodoService } from "./service/todo.service";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    createTodo(response: any, todo: Todo): Promise<any>;
    allTodo(id: any): Promise<any>;
    singleTodo(response: any, id: any): Promise<any>;
    update(response: any, id: any, body: any): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
