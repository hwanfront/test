import { CreateTestDto, Test } from "@packages/shared-types";

export abstract class TestRepositoryImpl {
  abstract create(data: CreateTestDto): Promise<Test>;
  abstract findById(id: number): Promise<Test>;
}