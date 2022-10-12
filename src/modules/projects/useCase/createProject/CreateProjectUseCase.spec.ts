import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { CreateProjectUseCase } from "./CreateProjectUseCase";

describe("Create Project", () => {
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let createProjectUseCase: CreateProjectUseCase;

    beforeEach(() => {
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        createProjectUseCase = new CreateProjectUseCase(inMemoryProjectsRepository, inMemoryTeamsRepository);
    });

    it("should be able to create new project with team", async () => {
        const team = await inMemoryTeamsRepository.create("Name team");
        const project = {
            name: "Name Project",
            team: team.id
        };
        await createProjectUseCase.execute(project);
        const projectVerification = {
            id: inMemoryProjectsRepository.projects[0].id,
            name: "Name Project",
            team: team 
        }
        expect(inMemoryProjectsRepository.projects[0]).toEqual(projectVerification);
    });

    it("should be able to create new project without team", async () => {
        const project = {
            name: "Name Project",
            team: null
        };
        await createProjectUseCase.execute(project);
        const projectVerification = {
            id: inMemoryProjectsRepository.projects[0].id,
            name: "Name Project" 
        }
        expect(inMemoryProjectsRepository.projects[0]).toEqual(projectVerification);
    });
});