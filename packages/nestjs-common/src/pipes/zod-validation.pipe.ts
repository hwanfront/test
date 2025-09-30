import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ZodSchema, ZodError } from 'zod/v3';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        // 2. ZodError를 잡아서 NestJS 표준 예외(BadRequestException)로 포장하여 던짐
        // .format()을 사용하여 에러를 구조화하거나, .issues를 그대로 담아 전달
        throw new BadRequestException({
          statusCode: 400,
          message: '유효성 검사에 실패했습니다.',
          // Zod 에러의 상세 정보를 'error' 필드에 담아 다음 단계(예외 필터)로 전달
          errors: error.issues, 
        });
      }
      throw new BadRequestException('유효성 검사 중 알 수 없는 오류가 발생했습니다.');
    }
  }
}