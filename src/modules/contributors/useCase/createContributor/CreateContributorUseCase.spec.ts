import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { CreateContributorUseCase } from "./CreateContributorUseCase";
import { ICreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Create Contributor", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let createContributorUseCase: CreateContributorUseCase;
    let contributor: ICreateContributorDTO;
    
    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        createContributorUseCase = new CreateContributorUseCase(inMemoryContributorsRepository);
        contributor = {
            name: "Contributor name",
            office: "Contributor office",
            team: "12323"
        };
    });

    it("should be able to create a new contributor", async () => {
        await createContributorUseCase.execute(contributor);
        expect(inMemoryContributorsRepository.contributors[0]).toHaveProperty("id");
    });
});