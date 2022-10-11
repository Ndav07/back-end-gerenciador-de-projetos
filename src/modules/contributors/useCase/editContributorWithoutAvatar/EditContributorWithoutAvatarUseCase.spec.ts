import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { EditContributorWithoutAvatarUseCase } from "./EditContributorWithoutAvatarUseCase";
import { ICreateContributorDTO, IEditContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Edit colaborador", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let editContributorWithoutAvatarUseCase: EditContributorWithoutAvatarUseCase;
    let contributor: ICreateContributorDTO;
    let contributorEdit: IEditContributorDTO;

    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        editContributorWithoutAvatarUseCase = new EditContributorWithoutAvatarUseCase(inMemoryContributorsRepository);
        contributor = {
            name: "Contributor name",
            office: "Contributor office",
            team: "12323"
        };
    });

    it("should be able to edit contributor", async () => {
        await inMemoryContributorsRepository.create(contributor);
        contributorEdit = {
            id: inMemoryContributorsRepository.contributors[0].id,
            name: "Update contributor name",
            office: "Update contributor office"
        };
        const contributorVerification = {
            id: inMemoryContributorsRepository.contributors[0].id,
            name: "Update contributor name",
            office: "Update contributor office",
            team: "12323"
        };
        await editContributorWithoutAvatarUseCase.execute(contributorEdit);
        expect(inMemoryContributorsRepository.contributors[0]).toEqual(contributorVerification);
    })
    
});