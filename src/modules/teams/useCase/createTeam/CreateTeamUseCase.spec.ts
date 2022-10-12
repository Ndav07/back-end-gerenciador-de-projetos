import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

describe("Create Team", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let createTeamUseCase: CreateTeamUseCase;

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        createTeamUseCase = new CreateTeamUseCase(inMemoryTeamsRepository);
    })

    it("shoul be able to create a new team", async () => {
        const team = await createTeamUseCase.execute("Name team");
        expect(team).toHaveProperty("id");
    });
});