import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from '@packages/shared-types';

import type { CreateTestDto } from '@packages/shared-types';


@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}


  @Get(':id') 
  async getTest(@Param('id') id: string): Promise<Test | null> { 
    const result = await this.testService.getTest(+id);
    return result;
  }

  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }
}
