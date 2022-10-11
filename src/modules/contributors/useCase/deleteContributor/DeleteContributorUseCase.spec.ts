import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { DeleteContributorUseCase } from "./DeleteContributorUseCase";
import { ICreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Delete contributor", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let deleteContributorUseCase: DeleteContributorUseCase;
    let contributor: ICreateContributorDTO;

    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        deleteContributorUseCase = new DeleteContributorUseCase(inMemoryContributorsRepository);
        contributor = {
            name: "Contributor name",
            office: "Contributor office",
            team: "12323"
        };
    });

    it("should should be able to delete contributor", async () => {
        await inMemoryContributorsRepository.create(contributor);
        await deleteContributorUseCase.execute(inMemoryContributorsRepository.contributors[0].id);
        expect(inMemoryContributorsRepository.contributors.length > 0).toBeFalsy();
    });
});
