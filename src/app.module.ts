/* eslint-disable prettier/prettier */
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot()
import { isAuthenticated } from './app.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './utils/constants';
import { join } from 'path/posix';
import { TodoController } from './todo.controller';
import { TodoService } from './service/todo.service';
import { UserService } from './service/user.service';
import { UserController } from './user.controller';
import { Todo, TodoSchema } from './model/todo.schema';
import { User, UserSchema } from './model/user.schema';


@Module({
  imports: [
    
    MongooseModule.forRoot(
      'process.env.MONGO_URL'
    ),
    JwtModule.register({
      secret,
      signOptions: { expiresIn: '2h' },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [UserController, TodoController],
  providers: [ UserService, TodoService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(isAuthenticated)
      .forRoutes(TodoController);
  }
}
