import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['../../.env'], 
    }),
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
