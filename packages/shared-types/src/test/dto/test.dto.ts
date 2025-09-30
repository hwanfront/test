import { TestSchema } from "../schemas";
import z from "zod";

export type TestDto = z.infer<typeof TestSchema>;