import * as mongoose from "mongoose";
import { User } from "./user.schema";
export type TodoDocument = Todo & Document;
export declare class Todo {
    title: string;
    description: string;
    createdDate: Date;
    createdBy: User;
}
export declare const TodoSchema: mongoose.Schema<Todo, mongoose.Model<Todo, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Todo>;
