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
        const teams = await this.repository.createQueryBuilder("teams").orderBy("teams.created_at").leftJoinAndSelect("teams.project", "project").leftJoinAndSelect("teams.contributors", "contributors").getMany();
        return teams;
    }

    async listById(id: string): Promise<Team> {
        const team = await this.repository.createQueryBuilder("teams").where("teams.id = :id", { id }).leftJoinAndSelect("teams.contributors", "contributors").getOne();
        return team;
    }

    async listTeamsWithoutProject(): Promise<Team[]> {
        const teams = await this.repository.createQueryBuilder("teams").leftJoinAndSelect("teams.project", "project").where("project IS NULL").getMany();
        return teams;
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("teams").delete().where("id = :id", { id }).execute();
    }

    async editTeam(id: string, name: string): Promise<void> {
        await this.repository.createQueryBuilder("teams").update().set({ name: name }).where("id = :id", { id }).execute();
    }
};

export { TeamsRepository };