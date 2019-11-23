import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { InfoController } from './info/info.controller';
import { InfoService } from './info/info.service';
import { LoggerMiddleware } from './logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';
import { PasswordEncrypterService } from './utils/password-encrypter.service';

@Module({
  imports: [AuthModule, UsersModule, MongooseModule.forRoot('mongodb://mongo/familymanager', { useNewUrlParser: true, useUnifiedTopology: true })],
  controllers: [InfoController, UsersController],
  providers: [InfoService, PasswordEncrypterService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
