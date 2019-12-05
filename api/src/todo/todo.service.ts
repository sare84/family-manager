import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from './todo.interface';
import { Model } from 'mongoose';
import { CreateTodoDto } from './create-todo.dto';

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

  async findOne(id: String, username: String): Promise<Todo | undefined> {
    return this.todoModel.findOne({ username, _id: id})
  }

  async delete(id: String, username: String) {
    return this.todoModel.findByIdAndRemove(id);
  }
}
