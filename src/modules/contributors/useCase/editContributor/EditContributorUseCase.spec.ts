import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { EditContributorUseCase } from "./EditContributorUseCase";
import { ICreateContributorDTO, IEditContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

describe("Edit colaborador", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let editContributorUseCase: EditContributorUseCase;
    let contributor: ICreateContributorDTO;
    let contributorEdit: IEditContributorDTO;

    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        editContributorUseCase = new EditContributorUseCase(inMemoryContributorsRepository);
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
            office: "Update contributor office",
            avatar: "Avatar contributor"
        };
        const contributorVerification = {
            id: inMemoryContributorsRepository.contributors[0].id,
            name: "Update contributor name",
            office: "Update contributor office",
            avatar: "Avatar contributor",
            team: "12323"
        };
        await editContributorUseCase.execute(contributorEdit);
        expect(inMemoryContributorsRepository.contributors[0]).toEqual(contributorVerification);
    })
});