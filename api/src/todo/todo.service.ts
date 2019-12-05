import { Injectable, Logger, HttpStatus, HttpException, Scope, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.interface';
import { Model } from 'mongoose';
import { CreateTodoDto } from './create-todo.dto';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

  constructor(
    @InjectModel('Todo') private readonly todoModel: Model<Todo>
  ) { }

  async create(createTodoDto: CreateTodoDto) {
    try {
      const createTodo = new this.todoModel(createTodoDto);
      return await createTodo.save();
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async find(username: String): Promise<Todo | undefined> {
    return this.todoModel.find({ username });
  }


}
