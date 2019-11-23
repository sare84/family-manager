import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PasswordEncrypterService } from "../utils/password-encrypter.service";

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly passwordEncrypterService: PasswordEncrypterService) {}
  
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await this.passwordEncrypterService.hash(createUserDto.password);
    return this.usersService.create(createUserDto);
  }
}