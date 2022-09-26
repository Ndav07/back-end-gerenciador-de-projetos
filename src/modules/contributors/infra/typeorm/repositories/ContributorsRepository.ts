import { DataSource, Repository } from "typeorm";

import { Contributor } from "../entities/Contributor";
import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { IContributorsRepository, CreateContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

class ContributorsRepository implements IContributorsRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Contributor>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Contributor);
    };

    async listByIdTeam(id: string): Promise<Contributor[]> {
        const contributors = await this.repository.createQueryBuilder("contributors").where("contributors.team = :id", { id }).getMany();
        return contributors;
    }

    async create({ name, office, team }: CreateContributorDTO): Promise<void> {
        const teamUse = await this.connectionDataBase.getRepository("teams").findOne({ where: {id: team} });
        const contributor = this.repository.create({ name, office, team: teamUse });
        await this.repository.save(contributor);
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("contributors").delete().where("id = :id", { id }).execute();
    }

    async editContributor(id: string, name: string, office: string, avatar: string): Promise<void> {
        await this.repository.createQueryBuilder("contributors").update().set({ name: name, office: office, avatar: avatar }).where("id = :id", { id }).execute();
    }
};

export { ContributorsRepository };