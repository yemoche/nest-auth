import { Todo, TodoDocument } from "../model/todo.schema";
import { Model } from "mongoose";
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    createTodo(todo: Object): Promise<Todo>;
    allTodo(id: any): Promise<any>;
    singleTodo(id: string): Promise<void>;
    updateTodo(id: any, todo: Todo): Promise<Todo>;
    delete(id: any): Promise<any>;
}
