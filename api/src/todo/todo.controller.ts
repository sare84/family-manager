import { Controller, Post, Body, Request, UseGuards, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { async } from 'rxjs/internal/scheduler/async';
import { CreateTodoDto } from './create-todo.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('todo')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,  
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Request() req, @Body() createTodoDto: CreateTodoDto) {
    createTodoDto.username = req.user.username;
    createTodoDto.created = new Date();
    return this.todoService.create(createTodoDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async list(@Request() req){
    return this.todoService.find(req.user.username);
  }
}
