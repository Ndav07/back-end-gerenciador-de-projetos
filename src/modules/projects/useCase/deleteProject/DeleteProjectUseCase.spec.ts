import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

describe("Delete Project", () => {
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let deleteProjectUseCase: DeleteProjectUseCase;

    beforeEach(() => {
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        deleteProjectUseCase = new DeleteProjectUseCase(inMemoryProjectsRepository);
    });

    it("should be able to delete projeto", async () => {
        const project = {
            name: "Name Project",
            team: {
                id: "123",
                name: "Name team"
            }
        }
        await inMemoryProjectsRepository.create(project);
        await deleteProjectUseCase.execute(inMemoryProjectsRepository.projects[0].id);
        expect(inMemoryProjectsRepository.projects.length > 0).toBeFalsy();
    })
})