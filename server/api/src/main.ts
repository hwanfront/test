import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { ExceptionsFilter } from './common/filters/exceptions.filter';

async function bootstrap() {
  // http server
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 

  // interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  // filter
  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new ExceptionsFilter(httpAdapterHost));

  // port
  const configService = app.get(ConfigService);
  const port = configService.get<number>('API_SERVER_PORT');
  await app.listen(port ?? 8080);
}
bootstrap();
