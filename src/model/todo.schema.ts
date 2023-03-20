/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "./user.schema";

export type TodoDocument = Todo & Document;
@Schema()
export class Todo {
    @Prop()
    title: string;
    @Prop()
    description: string;
    @Prop({ default: Date.now() })
    createdDate: Date
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    createdBy: User
}
export const TodoSchema = SchemaFactory.createForClass(Todo)