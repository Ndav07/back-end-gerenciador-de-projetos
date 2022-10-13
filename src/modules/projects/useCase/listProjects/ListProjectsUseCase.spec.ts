import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { ListProjectsUseCase } from "./ListProjectsUseCase";

describe("List Project by ID", () => {
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let listProjectsUseCase: ListProjectsUseCase;
    let projects: Project[];

    beforeEach(() => {
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        listProjectsUseCase = new ListProjectsUseCase(inMemoryProjectsRepository);
        projects = [
            {
                name: "Name Project",
                team: {
                    id: "1",
                    name: "Name Team"
                }
            },
            {
                name: "Name Project two",
                team: {
                    id: "2",
                    name: "Name Team two"
                }
            },
            {
                name: "Name Project three"
            }
        ]
    });

    it("should be able to list project by ID", async () => {
        for(let j in projects){
            await inMemoryProjectsRepository.create(projects[j]);
        }
        const projectsCreated = await listProjectsUseCase.execute();
        expect(projectsCreated.length = 3).toBeTruthy();
    });
});