import { InMemoryContributorsRepository } from "@modules/contributors/repositories/in-memory/inMemoryContributorsRepository";
import { ListContributorByIdTeamUseCase } from "./ListContributorByIdTeamUseCase";
import { ICreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";


describe("List contributors by id team", () => {
    let inMemoryContributorsRepository: InMemoryContributorsRepository;
    let listContributorByIdTeamUseCase: ListContributorByIdTeamUseCase;
    let contributors: ICreateContributorDTO[]
    
    beforeEach(() => {
        inMemoryContributorsRepository = new InMemoryContributorsRepository();
        listContributorByIdTeamUseCase = new ListContributorByIdTeamUseCase(inMemoryContributorsRepository);
        contributors = [
            {
                name: "Contributor name",
                office: "Contributor office",
                team: {
                    id: "12323",
                    name: "equipe"
                }
            },
            {
                name: "Contributor name two",
                office: "Contributor office two",
                team: {
                    id: "12323",
                    name: "equipe"
                }
            },
            {
                name: "Contributor name three",
                office: "Contributor office three",
                team: {
                    id: "12323",
                    name: "equipe",
                }
            }
        ]
    })

    it("should be able to list contributor", async () => {
        for(let j in contributors) {
            await inMemoryContributorsRepository.create(contributors[j]);
        }
        const contributorsList = await listContributorByIdTeamUseCase.execute("12323");
        expect(contributorsList.length = 3).toBeTruthy();
    });

})