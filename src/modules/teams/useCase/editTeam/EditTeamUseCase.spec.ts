import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { EditTeamUseCase } from "./EditTeamUseCase";

describe("Edit Team", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let editTeamUseCase: EditTeamUseCase;

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        editTeamUseCase = new EditTeamUseCase(inMemoryTeamsRepository);
    })

    it("should be able to edit a team", async () => {
        const team = await inMemoryTeamsRepository.create("Name team");
        await editTeamUseCase.execute(team.id, "Edit name team");
        const teamVerification = {
            id: team.id,
            name: "Edit name team"
        };
        expect(inMemoryTeamsRepository.teams[0]).toEqual(teamVerification);
    });
});