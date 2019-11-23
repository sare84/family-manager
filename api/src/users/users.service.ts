import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    } catch (error) {
      console.log(error);
    }
  }

  async findOneByName(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username })
  }

  async findOne(user): Promise<User | undefined> {
    return this.userModel.findOne({ userId: user.userId })
  }
}