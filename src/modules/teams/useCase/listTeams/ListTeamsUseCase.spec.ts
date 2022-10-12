import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { ListTeamsUseCase } from "./ListTeamsUseCase";

describe("List teams", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let listTeamsUseCase: ListTeamsUseCase;
    let teams: string[];

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        listTeamsUseCase = new ListTeamsUseCase(inMemoryTeamsRepository);
        teams = ["Name team one", "Name team two", "Name team three"];
    });

    it("should be able to list teams", async () => {
        for(let j in teams) {
            await inMemoryTeamsRepository.create(teams[j]);
        }
        const teamList = await listTeamsUseCase.execute();
        expect(teamList.length = 3).toBeTruthy();
    });
})