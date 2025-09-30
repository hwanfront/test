import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { RedisIoAdapter } from './redis-io.adapter';

async function bootstrap() {
  // http server
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 
  
  // redis
  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  // port
  const configService = app.get(ConfigService);
  const port = configService.get<number>('CHAT_SERVER_PORT'); 

  // run
  await app.startAllMicroservices();
  await app.listen(port ?? 8080);
}
bootstrap();
