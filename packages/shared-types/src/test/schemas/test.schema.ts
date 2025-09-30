import { z } from 'zod'

export const TestSchema = z.object({
  id: z.number().int(),
  data: z.string().nullable(),
})

export type Test = z.infer<typeof TestSchema>;