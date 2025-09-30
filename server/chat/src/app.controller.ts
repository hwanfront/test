import { Controller, Get, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ZodValidationPipe } from '@packages/nestjs-common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
