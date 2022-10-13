import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { ListProjectByIdUseCase } from "./ListProjectByIdUseCase";

describe("List Project by ID", () => {
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let listProjectByIdUseCase: ListProjectByIdUseCase;

    beforeEach(() => {
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        listProjectByIdUseCase = new ListProjectByIdUseCase(inMemoryProjectsRepository);
    });

    it("should be able to list project by ID", async () => {
        await inMemoryProjectsRepository.create({ name: "Name project" });
        const project = await listProjectByIdUseCase.execute(inMemoryProjectsRepository.projects[0].id);
        expect(project).toEqual(inMemoryProjectsRepository.projects[0]);
    });
});