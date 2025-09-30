// import { z } from 'zod';

// export const BaseResponseSchema = z.object({
//   data: z.any().describe('Controller가 반환한 실제 데이터 페이로드'),
//   statusCode: z.number().int().min(100).max(599),
//   message: z.string().min(1),
// });

// export type ResponseData<T> = z.infer<typeof BaseResponseSchema> & { data: T };
