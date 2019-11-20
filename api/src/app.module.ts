import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { InfoController } from './info/info.controller';
import { InfoService } from './info/info.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({ 
  imports: [],
  controllers: [InfoController],
  providers: [InfoService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
