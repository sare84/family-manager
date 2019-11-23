import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { UsersController } from './users.controller';
import { PasswordEncrypterService } from '../utils/password-encrypter.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema}])],
  providers: [UsersService, UsersController, PasswordEncrypterService],
  exports: [UsersService],
})
export class UsersModule {}
