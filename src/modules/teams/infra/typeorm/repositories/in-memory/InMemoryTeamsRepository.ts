import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { Team } from "../../entities/Team";


class InMemoryTeamsRepository implements ITeamsRepository {
    teams: Team[] = [];

    create(name: string): Promise<Team> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<Team[]> {
        throw new Error("Method not implemented.");
    }
    listById(id: string): Promise<Team> {
        throw new Error("Method not implemented.");
    }
    listTeamsWithoutProject(): Promise<Team[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    editTeam(id: string, name: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

};

export { InMemoryTeamsRepository }