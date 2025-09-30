import { Injectable } from '@nestjs/common';

import { TestRepositoryImpl } from './repositories/impl/test.repository';
import { CreateTestDto, Test } from '@packages/shared-types';

@Injectable()
export class TestService {
  constructor(
    private readonly testRepository: TestRepositoryImpl,
  ) {}
  
  async getTest(id: number): Promise<Test | null> {
    const result = await this.testRepository.findById(id)
    return result
  }

  async create(createTestDto: CreateTestDto) {
    return this.testRepository.create(createTestDto)
  }
}
