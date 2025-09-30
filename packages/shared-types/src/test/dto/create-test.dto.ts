import { CreateTestSchema } from "../schemas/create-test.schema";
import z from "zod";

export type CreateTestDto = z.infer<typeof CreateTestSchema>;