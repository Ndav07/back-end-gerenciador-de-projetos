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
        const teams = await this.repository.find();
        return teams;
    }

    async listById(id: string): Promise<Team> {
        const team = await this.repository.findOneBy({ id });
        return team;
    }

    async listTeamsWithoutProject(): Promise<Team[]> {
        const teams = await this.repository.createQueryBuilder("teams").leftJoinAndSelect("teams.project", "project").where("teams.project IS NULL").getMany();
        return teams;
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("teams").delete().where("id = :id", { id }).execute();
    }
};

export { TeamsRepository };