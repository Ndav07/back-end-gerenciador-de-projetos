import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { ListTeamByIdUseCase } from "./ListTeamByIdUseCase";

describe("List team by id", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let listTeamByIdUseCase: ListTeamByIdUseCase;

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        listTeamByIdUseCase = new ListTeamByIdUseCase(inMemoryTeamsRepository);
    });

    it("should be able to list team by id", async () => {
        const team = await inMemoryTeamsRepository.create("Name team");
        const teamList = await listTeamByIdUseCase.execute(team.id);
        const teamVerification = {
            id: team.id,
            name: "Name team"
        };
        expect(teamList).toEqual(teamVerification);
    });
});