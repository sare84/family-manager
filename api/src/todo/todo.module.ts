import { Module } from '@nestjs/common';
import { TodoSchema } from './todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema}])],
  providers: [TodoService, TodoController],
  exports: [TodoService],
})
export class TodoModule { }
