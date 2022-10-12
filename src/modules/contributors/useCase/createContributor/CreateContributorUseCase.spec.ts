import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { CreateContributorUseCase } from "./CreateContributorUseCase";
import { ICreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Create contributor", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let createContributorUseCase: CreateContributorUseCase;
    let contributor: ICreateContributorDTO;
    
    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        createContributorUseCase = new CreateContributorUseCase(inMemoryContributorsRepository, inMemoryTeamsRepository);
    });

    it("should be able to create a new contributor", async () => {
        const team = await inMemoryTeamsRepository.create('equipe');

        contributor = {
            name: "Contributor name",
            office: "Contributor office",
            team: team
        };
        
        await createContributorUseCase.execute({ name: contributor.name, office: contributor.office, team: contributor.team.id });
        expect(inMemoryContributorsRepository.contributors[0]).toHaveProperty("id");
    });
});