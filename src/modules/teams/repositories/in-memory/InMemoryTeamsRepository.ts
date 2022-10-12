import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { Team } from "../../infra/typeorm/entities/Team";

class InMemoryTeamsRepository implements ITeamsRepository {
    teams: Team[] = [];

    async create(name: string): Promise<Team> {
        const team = new Team();
        Object.assign(team, { name: name });
        this.teams.push(team);
        return team;
    }

    async list(): Promise<Team[]> {
        const teams = this.teams;
        return teams;
    }

    async listById(id: string): Promise<Team> {
        const team = this.teams.find(teams => teams.id === id);
        return team;
    }

    async listTeamsWithoutProject(): Promise<Team[]> {
        const teams = this.teams.filter(teams => teams.project === null);
        return teams;
    }

    async delete(id: string): Promise<void> {
        this.teams = this.teams.filter(teams => teams.id !== id);
    }

    async editTeam(id: string, name: string): Promise<void> {
        this.teams.map((teams) => {
            if(teams.id === id) {
                teams.name = name;
            }
        });
    }

};

export { InMemoryTeamsRepository };