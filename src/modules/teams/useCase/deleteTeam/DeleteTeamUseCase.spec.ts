import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

describe("Delete Team", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let deleteTeamUseCase: DeleteTeamUseCase;

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        deleteTeamUseCase = new DeleteTeamUseCase(inMemoryTeamsRepository);
    });

    it("should be able to delete team", async () => {
        const team = await inMemoryTeamsRepository.create("Name Team");
        await deleteTeamUseCase.execute(team.id);
        expect(inMemoryTeamsRepository.teams.length > 0).toBeFalsy();
    });
});