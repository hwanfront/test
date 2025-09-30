import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { MockTestRepository } from './repositories/mock-test.repository';
import { TestController } from './test.controller';
import { TestRepositoryImpl } from './repositories/impl/test.repository';

@Module({
  controllers: [TestController],
  providers: [
    TestService,
    {
      provide: TestRepositoryImpl,
      useClass: MockTestRepository
    }
  ],
  exports: [TestService]
})
export class TestModule {}
