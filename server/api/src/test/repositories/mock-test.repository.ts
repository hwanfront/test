import { TestRepositoryImpl } from './impl/test.repository';
import { CreateTestDto, Test } from '@packages/shared-types';
import { NotFoundException } from '@nestjs/common';

export class MockTestRepository implements TestRepositoryImpl {
  private tests: Test[] = [
    {id: 1, data: "test"},
  ];
  private nextId = 1;

  async create({ data }: CreateTestDto): Promise<Test> {
    const newTest: Test = { 
      id: this.nextId++, 
      data,
    };
    this.tests.push(newTest);
    return newTest;
  }
  
  async findById(id: number): Promise<Test> {
    const testItem = this.tests.find(item => item.id === id);

    if(!testItem) {
      throw new NotFoundException(`Test with id ${id} not found`);
    }
    
    return testItem
  }
}