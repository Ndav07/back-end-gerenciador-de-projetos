import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { Team } from "../entities/Team";

class TeamsRepository implements ITeamsRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Team>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Team);
    };

    async create(name: string): Promise<Team> {
        const teamCreate = this.repository.create({ name });
        const team = await this.repository.save(teamCreate);
        return team;
    };

    async list(): Promise<Team[]> {
        const teams = this.repository.find();
        return teams;
    }
};

export { TeamsRepository };