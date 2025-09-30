import { z } from 'zod';

const BaseResponseSchema = z.object({
  statusCode: z.number().int().min(100).max(599),
  message: z.string().min(1),
});

export const SuccessResponseSchema = BaseResponseSchema.extend({
  data: z.any().describe('Controller가 반환한 실제 데이터 페이로드'),
});

export type SuccessResponseDto<T> = z.infer<typeof SuccessResponseSchema> & {
  data: T;
};

export const ErrorResponseSchema = BaseResponseSchema.extend({
  error: z.string().optional(),
  data: z.null().default(null),
});

export type ErrorResponseDto = z.infer<typeof ErrorResponseSchema>;

