import { InMemoryTeamsRepository } from "@modules/teams/repositories/in-memory/InMemoryTeamsRepository";
import { ListTeamsWithoutProjectUseCase } from "./ListTeamsWithoutProjectUseCase";

describe("List teams", () => {
    let inMemoryTeamsRepository: InMemoryTeamsRepository;
    let listTeamsWithoutProjectUseCase: ListTeamsWithoutProjectUseCase;

    beforeEach(() => {
        inMemoryTeamsRepository = new InMemoryTeamsRepository();
        listTeamsWithoutProjectUseCase = new ListTeamsWithoutProjectUseCase(inMemoryTeamsRepository);
    });

    it("should be able to list teams without projects", async () => {
        inMemoryTeamsRepository.teams = [
            {
                id: "1",
                name: "Name team one",
                project: {
                    id: "1",
                    name: "Name project one"
                }
            },
            {
                id: "2",
                name: "Name team two",
                project: null
            },
            {
                id: "3",
                name: "Name team three",
                project: {
                    id: "2",
                    name: "Name project two"
                }
            },
            {
                id: "4",
                name: "Name team four",
                project: null
            },
        ]
        const teamsVerification = [
            {
                id: "2",
                name: "Name team two",
                project: null
            },
            {
                id: "4",
                name: "Name team four",
                project: null
            },
        ]
        const teams = await listTeamsWithoutProjectUseCase.execute();
        expect(teams).toEqual(teamsVerification);
    });
})