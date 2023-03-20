"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
config_1.ConfigModule.forRoot();
const app_middleware_1 = require("./app.middleware");
const mongoose_1 = require("@nestjs/mongoose");
const serve_static_1 = require("@nestjs/serve-static");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./utils/constants");
const posix_1 = require("path/posix");
const todo_controller_1 = require("./todo.controller");
const todo_service_1 = require("./service/todo.service");
const user_service_1 = require("./service/user.service");
const user_controller_1 = require("./user.controller");
const todo_schema_1 = require("./model/todo.schema");
const user_schema_1 = require("./model/user.schema");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(app_middleware_1.isAuthenticated)
            .forRoutes(todo_controller_1.TodoController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('process.env.MONGO_URL'),
            jwt_1.JwtModule.register({
                secret: constants_1.secret,
                signOptions: { expiresIn: '2h' },
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, posix_1.join)(__dirname, '..', 'public'),
            }),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: todo_schema_1.Todo.name, schema: todo_schema_1.TodoSchema }]),
        ],
        controllers: [user_controller_1.UserController, todo_controller_1.TodoController],
        providers: [user_service_1.UserService, todo_service_1.TodoService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map