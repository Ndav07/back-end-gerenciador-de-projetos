import { InMemoryProjectsRepository } from "@modules/projects/repositories/in-memory/InMemoryProjectsRepository";
import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { EditProjectUseCase } from "./EditProjectUseCase";

describe("Edit project", () => {
    let inMemoryProjectsRepository: InMemoryProjectsRepository;
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let editProjectUseCase: EditProjectUseCase;

    beforeEach(() => {
        inMemoryProjectsRepository = new InMemoryProjectsRepository();
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        editProjectUseCase = new EditProjectUseCase(inMemoryProjectsRepository, inMemoryTeamsRepository);
    });

    it("should be able to edit project", async () => {
        const team = await inMemoryTeamsRepository.create("Name team");
        const teamTwo = await inMemoryTeamsRepository.create("Name team two");
        const project = {
            name: "Name Project",
            team: team
        };
        await inMemoryProjectsRepository.create(project);
        const projectVerification = {
            id: inMemoryProjectsRepository.projects[0].id,
            name: "Name Project Update",
            team: teamTwo
        }
        await editProjectUseCase.execute({ name: "Name Project Update", id: inMemoryProjectsRepository.projects[0].id, team: teamTwo.id });
        expect(inMemoryProjectsRepository.projects[0]).toEqual(projectVerification);
    });

    it("should be able to edit project without team", async () => {
        const project = {
            name: "Name Project"
        };
        await inMemoryProjectsRepository.create(project);
        const projectVerification = {
            id: inMemoryProjectsRepository.projects[0].id,
            name: "Name Project Update",
            team: null
        }
        await editProjectUseCase.execute({ name: "Name Project Update", id: inMemoryProjectsRepository.projects[0].id });
        expect(inMemoryProjectsRepository.projects[0]).toEqual(projectVerification);
    });
})