import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { InMemoryTeamsRepository } from "@modules/teams/infra/typeorm/repositories/in-memory/InMemoryTeamsRepository";
import { CreateContributorUseCase } from "./CreateContributorUseCase";
import { ICreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Create Contributor", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let createContributorUseCase: CreateContributorUseCase;
    let contributor: ICreateContributorDTO;
    
    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        createContributorUseCase = new CreateContributorUseCase(inMemoryContributorsRepository, inMemoryTeamsRepository);
        contributor = {
            name: "Contributor name",
            office: "Contributor office",
            team: {
                id: "12323",
                name: "equipe",
            }
        };
    });

    it("should be able to create a new contributor", async () => {
        await createContributorUseCase.execute(contributor);
        expect(inMemoryContributorsRepository.contributors[0]).toHaveProperty("id");
    });
});